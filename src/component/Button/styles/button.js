import styled from "styled-components/macro";

export const Container = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  justify-content: center;
  transition: filter 0.3s ease-in;
  background: #333;
  color: #fff;
  &:active,
  &:focus {
    filter: brightness(120%);
  }
  &:nth-child(17) {
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: calc(65px / 2);
    width: 139px;
    text-align: center;
    padding-left: 23px;
    justify-content: left;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    background-color: #a5a5a5;
    color: black;
  }
  &:nth-child(4n),
  &:last-child {
    background: #f1a33c;
    font-size: 30px;
    align-items: top;
  }
`;
