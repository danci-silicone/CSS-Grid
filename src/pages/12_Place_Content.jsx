import React from "react";
import styled from "styled-components";
import { Wrapper } from "./styling";

const Container = styled.div`
  border: 1px dotted black;
  height: 100%;
  background-color: purple;

  display: grid;

  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);

  place-content: center center;
`;

const Item1 = styled.div`
  background-color: orange;
  border: 1px dotted black;
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
`;

const Item6 = styled.div`
  background-color: orange;
  border: 1px dotted black;
`;

export const PlaceContent = () => {
  return (
    <Wrapper>
      <Container>
        <Item1>Item 1</Item1>
        <Item2>Item 2</Item2>
        <Item3>Item 3</Item3>

        <Item4>Item 4</Item4>
        <Item5>Item 5</Item5>
        <Item6>Item 6</Item6>
      </Container>
    </Wrapper>
  );
};
