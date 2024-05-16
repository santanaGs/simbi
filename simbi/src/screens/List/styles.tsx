import styled from "styled-components";

export const Container = styled.div`
  width: min(80%);
  margin: 0 auto;
  margin-top: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  color: #1b83a3;
`;

export const SeeMore = styled.button`
  width: max-content;
  align-self: flex-end;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  position: absolute;
  bottom: 1%;
  font-weight: bold;
  cursor: pointer;
  z-index: 99999;
`;
