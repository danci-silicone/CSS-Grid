import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  border: 1px dotted black;
  background-color: purple;

  display: grid;

  /* grid-template-rows: 100px 300px;
  grid-template-columns: 3fr 1fr; */

  /* This is equivalent: */

  /* grid: 100px 300px / 3fr 1fr; */

  /* ****************************** */

  /* grid-auto-flow: row;
  grid-template-columns: 200px 1fr; */

  /* This is equivalent: */

  /* grid: auto-flow / 200px 1fr; */

  /* ****************************** */

  /* grid-auto-flow: row dense;
  grid-auto-rows: 100px;
  grid-template-columns: 1fr 2fr; */

  /* This is equivalent: */

  /* grid: auto-flow dense 100px / 1fr 2fr; */

  /* This is equivalent: */

  /* grid-template-rows: 100px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 200px; */

  /* ****************************** */

  /* grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto; */

  /* This is equivalent: */

  grid:
    [row1-start] "header header header" 1fr [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;
`;

const Item2 = styled.div`
  background-color: green;
  border: 1px dotted black;
`;

const Item4 = styled.div`
  background-color: blue;
  border: 1px dotted black;
`;

export const Grid = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>Item 1</Item1>
        <Item2>Item 2</Item2>

        <Item4>Item 4</Item4>
      </Container>
    </Wrapper>
  );
};
