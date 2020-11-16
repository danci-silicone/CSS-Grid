import React from "react";
import styled from "styled-components";
import { GridWrapper, Paragraph1 } from "./styling";

const Container = styled.div`
  display: grid; /* or inline-grid */

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
`;

const Item = styled.div`
  background-color: whitesmoke;
  border: 0.5px dotted black;
`;

const Item1 = styled.div`
  background-color: orange;
  height: 80px;
  width: 300px;

  grid-column-start: 4;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
`;

const Item2 = styled.div`
  background-color: orange;
  height: 80px;
  width: 300px;

  grid-column: 3;
  grid-row: 4;
`;

export const MyExample = () => {
  return (
    <GridWrapper>
      <Container>
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
        <Item1>1</Item1>
        <Item2>2</Item2>
      </Container>
      <Paragraph1>
        <b>Parent</b>
        <br />
        Just my example
      </Paragraph1>
    </GridWrapper>
  );
};
