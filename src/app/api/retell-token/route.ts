import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { agentId } = await req.json();

  if (!agentId) {
    return NextResponse.json({ error: "Agent ID is required" }, { status: 400 });
  }

  const RETELL_API_KEY = process.env.RETELL_API_KEY;

  if (!RETELL_API_KEY) {
    return NextResponse.json({ error: "Retell API key not configured" }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RETELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Retell API error:", errorText);
      return NextResponse.json({ error: "Failed to create web call" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ accessToken: data.access_token });
  } catch (error) {
    console.error("Error creating web call:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
