import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  height: 700px;
  background-color: purple;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;

  grid-column: 1 / 1;
  grid-row: 1 / 1;

  align-self: start;
`;

const Item2 = styled.div`
  background-color: green;
  border: 1px dotted black;

  grid-column: 2 / 2;
  grid-row: 3 / 3;

  align-self: end;
`;

const Item3 = styled.div`
  background-color: whitesmoke;
  border: 1px dotted black;

  grid-column: 4 / 4;
  grid-row: 3 / 3;

  align-self: center;
`;

const Item4 = styled.div`
  background-color: blue;
  border: 1px dotted black;

  grid-column: 3 / 4;
  grid-row: 1 / 2;

  align-self: stretch;
`;

export const AlignSelf = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>Item 1</Item1>
        <Item2>Item 2</Item2>
        <Item3>Item 3</Item3>
        <Item4>Item 4</Item4>
      </Container>
    </Wrapper>
  );
};
