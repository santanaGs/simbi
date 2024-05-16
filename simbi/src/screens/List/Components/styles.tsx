import styled from "styled-components";

export const Container = styled.div`
  width: 460px;
  padding: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #e9e9e9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: inherit;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 400px;
  width: 90%;
  margin: 0 auto;
`;

export const Tag = styled.p`
  background-color: #fff2db;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-weight: 600;
  color: #c6994e;
  width: max-content;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3``;

export const Location = styled.p`
  color: #626b78;
`;

export const Description = styled.p`
  color: #626b78;
  width: 95%;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ValueTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Value = styled.p``;
export const ValueBold = styled.p`
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  background-color: #fafbfd;
  cursor: pointer;
  color: #bac2ca;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    background-color: #fff2db;
    color: #c6994e;
  }
`;

export const Heart = styled.img`
  width: 30px;
  height: auto;
`;
