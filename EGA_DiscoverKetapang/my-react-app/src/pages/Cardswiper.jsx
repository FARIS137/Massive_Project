import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Cardswipe = [
  {
    id: 1,
    title: "Bukit Batu Daya",
    desc: "Desa Lubuk Batu, Kecamatan Simpang Hilir",
    images: "/images/wisatabatu.png",
  },
  {
    id: 2,
    title: "Rumah Adat Melayu Kyai Mangku Negeri",
    desc: "Kelurahan Mulia Baru, Kecamatan Delta Pawan",
    images: "/images/rumahadat.png",
  },
  {
    id: 4,
    title: "Air Terjun Batu Arang",
    desc: "Desa Mekar Utama, Kecamatan Kendawangan",
    images: "/images/airterjun.png",
  },
];

const Cardswiper = () => {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Cardswipe.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card-swipe" style={{ boxShadow: "1px 2px 10px 4px rgba(0, 0, 0, 0.5)" }}>
              <img src={card.images} alt="Gambar Card" />
              <div className="card-body">
                <h2 className="text-white fs-5 fw-bold">{card.title}</h2>
                <p className="fs-6">{card.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cardswiper;
