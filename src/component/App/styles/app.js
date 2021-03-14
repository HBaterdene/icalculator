import styled from "styled-components/macro";
export const Window = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  background: #000;
`;
export const Container = styled.div`
  width: 328px;
  height: 528px;
  border-radius: 8px;
  border: 8px white solid;
  background-color: #000000;
  color: #fff;
  margin: auto;
  padding: 10px;
`;
export const Display = styled.div`
  height: 100px;
  width: 100%;
  text-align: right;
  font-size: 50px;
  overflow-x: scroll;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  margin-top: 20px;
  grid-gap: 9px;
  font-size: 24px;
  font-weight: bold;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
