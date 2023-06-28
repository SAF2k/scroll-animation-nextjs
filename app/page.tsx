"use client";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import HorizontalWrapper from "./components/HorizontalWrapper/HorizontalWrapper";
import SelectionLayout from "./components/SelectionLayout";
import styled from "styled-components";
import { cards } from "./components/utils/cards";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextSection from "./components/TextSection";
import FullPage from "./components/FullPage/FullPage";
import ZoomSection from "./components/ZoomSection";
import Footer from "./components/Footer";

const page = () => {
  const video = React.useRef<HTMLVideoElement>(null);

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
    <>
      <Header />
      <MainStyle>
        <SelectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SelectionLayout>

        <FullPage />

        <SelectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards" style={{ right: 0 }}>
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SelectionLayout>

        <SelectionLayout>
          <TextSection />
        </SelectionLayout>

        <SelectionLayout>
          <motion.div className="video" style={{ opacity, scale }}>
            <iframe
              src="https://www.youtube.com/embed/OuaUjkZhfqQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SelectionLayout>

        <SelectionLayout>
          <ZoomSection></ZoomSection>
        </SelectionLayout>

        <SelectionLayout>
          <TextSection />
        </SelectionLayout>

        <Footer />

      </MainStyle>
    </>
  );
};

export default page;

const MainStyle = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;

    iframe{
      border:none;
      width: 100%;
      height: 52rem;
    }
  }
`;
