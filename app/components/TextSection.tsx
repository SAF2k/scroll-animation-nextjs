"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextSectionProps {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: TextSectionProps) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );
  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

const TextSection = () => {
  return (
    <TextSectionStyled>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
    </TextSectionStyled>
  );
};

const TextSectionStyled = styled.div`
p{
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
}
`

export default TextSection;
