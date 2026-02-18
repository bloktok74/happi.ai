"use client";

import { useState, useEffect, useRef } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { Phone, PhoneOff, Mic, MicOff } from "lucide-react";

interface RetellCallButtonProps {
  agentId: string;
}

export default function RetellCallButton({ agentId }: RetellCallButtonProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [error, setError] = useState("");
  const [callStatus, setCallStatus] = useState("");
  const retellWebClientRef = useRef<RetellWebClient | null>(null);

  useEffect(() => {
    retellWebClientRef.current = new RetellWebClient();
    return () => {
      if (retellWebClientRef.current && isCallActive) {
        retellWebClientRef.current.stopCall();
      }
    };
  }, [isCallActive]);

  const toggleCall = async () => {
    if (isCallActive) {
      retellWebClientRef.current?.stopCall();
      setIsCallActive(false);
      setCallStatus("");
    } else {
      try {
        setError("");
        setCallStatus("Requesting microphone access...");

        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(async () => {
            setCallStatus("Connecting to AI agent...");

            const response = await fetch("/api/retell-token", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ agentId }),
            });

            const data = await response.json();

            if (!response.ok) {
              if (response.status === 429) {
                throw new Error(
                  data.message || "Demo call limit reached. Please try again later."
                );
              }
              throw new Error("Failed to get access token");
            }

            const { accessToken } = data;

            setCallStatus("Call connected");
            await retellWebClientRef.current?.startCall({ accessToken });
            setIsCallActive(true);
          })
          .catch((err) => {
            if (err instanceof Error && err.message.includes("access token")) {
              setError(err.message);
            } else {
              setError(
                "Microphone access denied. Please allow microphone access to make a call."
              );
            }
            setCallStatus("");
            console.error("Call error:", err);
          });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to start call";
        setError(errorMessage);
        setCallStatus("");
        console.error("Call error:", err);
      }
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={toggleCall}
        disabled={!!callStatus && !isCallActive}
        className={`group flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white transition-all ${
          isCallActive
            ? "bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
            : "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
        } disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isCallActive ? (
          <>
            <div className="relative flex items-center justify-center">
              <div className="absolute h-10 w-10 rounded-full bg-white/30 animate-ping" />
              <PhoneOff size={20} className="relative z-10" />
            </div>
            <span>End Call</span>
          </>
        ) : (
          <>
            <Phone size={20} />
            <span>{callStatus ? "Connecting..." : "Hear a Live Demo"}</span>
          </>
        )}
      </button>

      {callStatus && (
        <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
          {isCallActive ? (
            <Mic size={18} className="text-green-500 animate-pulse" />
          ) : (
            <MicOff size={18} className="text-muted" />
          )}
          <p className="text-sm font-medium text-foreground">{callStatus}</p>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <p className="text-center text-xs text-muted">
        Click to start a real-time voice conversation with our AI agent
      </p>
    </div>
  );
}
