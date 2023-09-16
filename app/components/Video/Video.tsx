"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Video = () => {
      const video = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );
  return (
      <motion.div className="video" style={{ opacity, scale }}>
        <iframe
          src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
  );
}

export default Video