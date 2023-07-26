"use client";
import Button from "@mui/material/Button";
import styled from "styled-components";

const SButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: orange;
  }
`;

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <SButton variant="contained">Hello World</SButton>
    </main>
  );
}
