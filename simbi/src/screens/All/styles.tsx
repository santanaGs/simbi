import styled from "styled-components";

export const Grid = styled.div`
  width: min(90%);
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  width: min(90%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SeeMore = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  font-size: 3rem;
`;
