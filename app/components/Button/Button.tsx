"use client";

import styled from "styled-components";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

const Button = ({
  name,
  icon,
  background = "var(--color-bg)",
  color,
  border,
}: ButtonProps) => {
  return <ButtonStyle
  style={{background:background, color:color, border:border}}>
    {icon && icon} {name}
  </ButtonStyle>;
};

const ButtonStyle = styled.button` 
padding: 0.8rem;
border-radius: 30px;
border: 2px solid var(--color-border);
cursor: pointer;
transition: all 0.2s ease-in-out;
display: flex;
align-items: center;
gap: 1rem;
&:hover {
    background: var(--color-border);
    color: white
}
`

export default Button;
