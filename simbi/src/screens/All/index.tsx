// query
import { useQuery } from "@tanstack/react-query";

// axios
import axios from "axios";

// components
import Card from "../List/Components";

//  styles
import { Container, SeeMore, Grid } from "./styles";

//  router
import { useNavigate } from "react-router-dom";

const All: React.FC = () => {
  // Navigate
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: () => {
      return axios
        .get("http://192.168.1.107:8000/api/projects/all")
        .then((res) => {
          return res.data;
        });
    },
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados: {error.message}</div>;
  // rendering
  return (
    <Container>
      <SeeMore
        onClick={() => {
          navigate("/");
        }}
      >
        VOLTAR
      </SeeMore>
      <Grid>
        {data &&
          data.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                onClick={() => {}}
                name={item.nome}
                state={item.municipio}
                uf={item.uf}
                description={item.resumo.slice(0, 170)}
                approved={item.valor_aprovado}
                captured={item.valor_captado}
              />
            );
          })}
      </Grid>
    </Container>
  );
};

export default All;
