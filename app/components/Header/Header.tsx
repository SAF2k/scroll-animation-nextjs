"use client";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import Button from "../Button/Button";
import { styled } from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import Monkey from "../../../public/images/monkey.png";
import React, { useRef } from "react";
import hover3d from "../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <HeaderStyle ref={hero}>
      {/* Navbar start  */}
      <nav>
        {/* LOGO start */}
        <div className="logo">
          <Image src={Logo} alt="logo" width={36} height={36} />
          <h2>Logo</h2>
        </div>
        {/* LOGO end */}

        {/* Search start  */}
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        {/* Search end  */}

        {/* Navigation start  */}
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
        {/* Navigation end  */}
      </nav>

      {/* Navbar end  */}

      {/* Header Content start */}
      <div className="header-content">
        {/* Text Content start */}
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, Collect and Sell extraordinary NFTs.
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          {/* Text Content end */}

          {/* Button start */}
          <div className="button">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
          {/* Button end */}
        </div>

        {/* Image start */}
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src={Monkey}
              alt="hero"
              style={{
                transform: imageHover.transform,
              }}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      {/* Header Content end */}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;

      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.1s linear;
        padding-bottom: 1.5rem;
      }

      .button {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
