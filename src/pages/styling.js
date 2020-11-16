import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 8.5em;
  width: 1250px;
  height: 750px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Paragraph1 = styled.div`
  background-color: grey;
  height: 100%;
  width: 900px;
  grid-row: 10/11;
`;

export const Paragraph2 = styled.div`
  background-color: grey;
  height: 100%;
  width: 900px;
  grid-row: 11/12;
`;

export const Paragraph3 = styled.div`
  background-color: grey;
  height: 100%;
  width: 900px;
  grid-row: 12/13;
`;
