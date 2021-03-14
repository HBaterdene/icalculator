import React from "react";
import { Container } from "./styles/button";
export default function Button({ content, handleClick }) {
  return <Container onClick={() => handleClick(content)}>{content}</Container>;
}
