// query
import { useQuery } from "@tanstack/react-query";

// axios
import axios from "axios";

// component
import Card from "./Components";

// styled
import { Container, SeeMore, Title } from "./styles";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SlideNextButton from "./Components/ButtonNext";
import SlidePrevButton from "./Components/ButtonPrev";

// router
import { useNavigate } from "react-router-dom";

const List: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: () => {
      return axios.get("http://192.168.1.107:8000/api/projects").then((res) => {
        return res.data;
      });
    },
  });

  // Navigate
  const navigate = useNavigate();

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados: {error.message}</div>;

  return (
    <Container>
      <Title>Ver outros Projetos de Proponente</Title>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={30}
        slidesPerView={3.1}
        autoplay
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 3.1,
          },
          1000: {
            slidesPerView: 3.1,
          },
          1500: {
            slidesPerView: 3.1,
          },
          1700: {
            slidesPerView: 3.1,
          },
        }}
      >
        <SlideNextButton>Slide</SlideNextButton>
        {data &&
          data.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  onClick={() => {}}
                  name={item.nome}
                  state={item.municipio}
                  uf={item.uf}
                  description={item.resumo.slice(0, 170)}
                  approved={item.valor_aprovado}
                  captured={item.valor_captado}
                />
              </SwiperSlide>
            );
          })}
        <SlidePrevButton></SlidePrevButton>
      </Swiper>
      <SeeMore
        onClick={() => {
          navigate("/all");
        }}
      >
        + VER TODOS
      </SeeMore>
    </Container>
  );
};

export default List;
