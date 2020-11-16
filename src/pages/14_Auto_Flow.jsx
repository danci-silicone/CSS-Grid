import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  border: 1px dotted black;

  background-color: purple;

  display: grid;

  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;

  grid-column: 1;
  grid-row: 1 / 3;
`;

const Item2 = styled.div`
  background-color: green;
  border: 1px dotted black;
`;

const Item3 = styled.div`
  background-color: whitesmoke;
  border: 1px dotted black;
`;

const Item4 = styled.div`
  background-color: blue;
  border: 1px dotted black;
`;

const Item5 = styled.div`
  background-color: orange;
  border: 1px dotted black;

  grid-column: 5;
  grid-row: 1 / 3;
`;

export const AutoFlow = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>Item 1</Item1>
        <Item2>Item 2</Item2>

        <Item3>Item 3</Item3>

        <Item4>Item 4</Item4>
        <Item5>Item 5</Item5>
      </Container>
    </Wrapper>
  );
};
