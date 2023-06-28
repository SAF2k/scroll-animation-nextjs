"use client";

import { ChildProcess } from "child_process";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

interface HorizontalWrapperProps {
  children: React.ReactNode;
  direction: number;
  height: string;
}

const HorizontalWrapper = ({
  children,
  direction,
  height,
}: HorizontalWrapperProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalWrapper;
