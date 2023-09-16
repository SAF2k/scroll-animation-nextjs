"use client"
import styled from "styled-components";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import HorizontalWrapper from "./components/HorizontalWrapper/HorizontalWrapper";
import SelectionLayout from "./components/SelectionLayout";
import { cards } from "./components/utils/cards";
import TextSection from "./components/TextSection";
import FullPage from "./components/FullPage/FullPage";
import ZoomSection from "./components/ZoomSection";
import Footer from "./components/Footer";
import Video from "./components/Video/Video";

const page = () => {


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
          <Video />
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
