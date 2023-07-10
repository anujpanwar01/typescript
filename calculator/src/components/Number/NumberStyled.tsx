import { styled } from "styled-components";

export const NumberContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  .calculator__number--2 {
    grid-column: 1/3;
  }
`;
