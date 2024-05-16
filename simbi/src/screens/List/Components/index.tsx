import React, { useState } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  Description,
  Heart,
  Location,
  Tag,
  Title,
  TitleContainer,
  Value,
  ValueBold,
  ValueContainer,
  ValueTextContainer,
} from "./styles";
import { CardProps } from "./types";

// image
import heart from "../../../assets/heart.png";
import heartRed from "../../../assets/heart-red.png";

const Card: React.FC<CardProps> = ({
  name,
  state,
  uf,
  description,
  approved,
  captured,
  onClick,
  favorite,
}: CardProps) => {
  // functions
  function formatedCoin(value: number | number): string {
    const number = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(number)) {
      throw new Error("O valor não é um número válido.");
    }
    const formatoMoeda = {
      style: "currency",
      currency: "BRL",
    };
    return number.toLocaleString("pt-BR", formatoMoeda);
  }
  // states
  const [favoriteIcon, setFavoriteIcon] = useState<boolean>(false);
  // Rendering
  return (
    <Container>
      <Content>
        <Tag>ROUANET</Tag>
        <TitleContainer>
          <Title>{name}</Title>
          <Location>
            {state} • {uf}
          </Location>
        </TitleContainer>
        <Description>{description} ...</Description>
        <ValueContainer>
          <ValueTextContainer>
            <Value>Aprovado</Value>
            <ValueBold>{formatedCoin(approved)}</ValueBold>
          </ValueTextContainer>
          <ValueTextContainer>
            <Value>Captado</Value>
            <ValueBold>{formatedCoin(captured)}</ValueBold>
          </ValueTextContainer>
        </ValueContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              setFavoriteIcon(!favoriteIcon);
            }}
          >
            {favoriteIcon ? "REMOVER" : "ADICIONAR"}
          </Button>
          <Heart src={favoriteIcon ? heartRed : heart} alt="" />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Card;
