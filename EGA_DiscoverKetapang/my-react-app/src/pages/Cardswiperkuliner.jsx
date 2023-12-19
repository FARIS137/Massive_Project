import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Cardswipkuliner = [
  {
    id: 1,
    title: "Ale-Ale",
    images: "/images/ale-ale.jpg",
  },
  {
    id: 2,
    title: "Mie Sagu",
    images: "/images/mie-sagu.jpg",
  },
  {
    id: 4,
    title: "Jenjorong",
    images: "/images/jenjorong.jpg",
  },
];

const Cardswiperkuliner = () => {
  return (
    <Swiper
      slidesPerView={3}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {Cardswipkuliner.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="img-kuliner" style={{ boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.7)" }}>
              <img src={card.images} alt={card.title} />
              <p>{card.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Cardswiperkuliner;
