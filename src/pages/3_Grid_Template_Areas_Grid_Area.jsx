import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  height: 700px;
  background-color: purple;

  display: grid;
  grid-template-columns: 300px 300px 300px 350px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;

  grid-area: header;
`;

const Item2 = styled.div`
  background-color: green;
  border: 1px dotted black;

  grid-area: main;
`;

const Item3 = styled.div`
  background-color: whitesmoke;
  border: 1px dotted black;

  grid-area: sidebar;
`;

const Item4 = styled.div`
  background-color: blue;
  border: 1px dotted black;

  grid-area: footer;
`;

export const GridTemplateAreasGridArea = () => {
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
