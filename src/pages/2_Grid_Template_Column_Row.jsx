import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  height: 700px;
  background-color: purple;

  display: grid;
  /* grid-template-columns: 100px 50px auto 50px 100px;
  grid-template-rows: 25% 200px auto; */

  /* grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line]; */

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const Item2 = styled.div`
  background-color: green;
  border: 1px dotted black;

  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
`;

const Item3 = styled.div`
  background-color: whitesmoke;
  border: 1px dotted black;

  grid-column: 3 / 4;
  grid-row: 1 / 4;
`;

export const GridTemplateColumnRow = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>Item 1</Item1>
        <Item2>Item 2</Item2>
        <Item3>Item 3</Item3>
      </Container>
    </Wrapper>
  );
};
