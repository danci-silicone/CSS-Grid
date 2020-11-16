import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  border: 1px dotted black;

  background-color: purple;

  display: grid;

  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;

  grid-auto-columns: 60px;
  grid-auto-rows: 90px;
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;

  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const Item2 = styled.div`
  background-color: green;
  border: 1px dotted black;

  grid-column: 5 / 6;
  grid-row: 3 / 4;
`;

export const GridAuto = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>Item 1</Item1>
        <Item2>Item 2</Item2>
      </Container>
    </Wrapper>
  );
};
