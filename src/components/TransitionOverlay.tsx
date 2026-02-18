"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TransitionOverlay() {
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);
  const prevPath = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render (initial page load)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (prevPath.current !== pathname) {
      prevPath.current = pathname;
      setTransitioning(true);
    }
  }, [pathname]);

  return (
    <AnimatePresence onExitComplete={() => setTransitioning(false)}>
      {transitioning && (
        <>
          {/* Phase 1: Black curtain slides in from left to right */}
          <motion.div
            key="curtain"
            className="fixed inset-0 z-[9999] bg-[#111]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath: [
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
                "inset(0 0% 0 0)",
                "inset(100% 0% 0 0)",
              ],
            }}
            exit={{ clipPath: "inset(100% 0% 0 0)" }}
            transition={{
              duration: 1.6,
              times: [0, 0.3, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => setTransitioning(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}
