import Navbarwisata from "../Component/Fragments/Navbarwisata.jsx";
import CenteredCard from "../Component/Fragments/Wisatacard.jsx";
import Bgimage from "../assets/img/wisata-budaya.png";
import React from "react";
import Bgimage2 from "../assets/img/wisata-budaya2.png";
import pic1 from "../assets/img/tradisional1.png";
import pic2 from "../assets/img/tradisional2.png";
import pic3 from "../assets/img/tradisional3.png";
import Footercomponent from "../Component/Fragments/Footercomponent.jsx";
import Cardswiperkuliner from "./Cardswiperkuliner.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Wisatapages = () => {
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);

  const handleScroll = () => {
    const element6 = document.querySelector(".animate-in-6");
    const element7 = document.querySelector(".animate-in-7");
    const element8 = document.querySelector(".animate-in-8");

    if (element6) {
      const elementTop6 = element6.getBoundingClientRect().top;
      setIsVisible6(elementTop6 < window.innerHeight - 100);
    }
    if (element7) {
      const elementTop7 = element7.getBoundingClientRect().top;
      setIsVisible7(elementTop7 < window.innerHeight - 100);
    }
    if (element8) {
      const elementTop8 = element8.getBoundingClientRect().top;
      setIsVisible8(elementTop8 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "85vh",
          fontFamily: "Times New Roman",
        }}
      >
        <Navbarwisata />
        <div className="label">
          <div className="flexcontainer">
            <p className="text">
              <span className="text-wrapper">
                Explore Budaya
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper">Ketapang</span>
            </p>
          </div>
        </div>
        <div
          className={`animate-in-6 ${
            isVisible6 ? "show" : ""
          } d-flex flex-row d-grid gap-3 justify-content-center`}
          onClick={resetScroll}
        >
          <CenteredCard />
        </div>

        <div
          className="bg-image img-fluid"
          style={{
            backgroundColor: "#D9D9D9",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "95vh",
          }}
        ></div>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Bgimage2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "85vh",
          }}
        >
          <div
            className={`animate-in-7 ${
              isVisible7 ? "show" : ""
            }  d-grid gap-3 justify-content-center`}
            onClick={resetScroll}
          >
            <div
              style={{ paddingTop: "30px", lineHeight: "4px" }}
              className="text-center text-light"
            >
              <h1 className="mb-3">Tari Tradisional</h1>
              <p>
                Tari-tarian tradisional Ketapang sangat menarik dan bisa menjadi
                bagian dari pengalaman
              </p>
              <p>
                budaya Anda. Berbagai tarian seperti Tari Adat Dayak Pesaguan
              </p>
              <p>ditampilkan dalam acara-acara khusus.</p>
            </div>
            <div className=" mt-4 d-flex justify-content-center align-items-center">
              <img className="pe-5" src={pic1}></img>
              <img className="pe-5" src={pic2}></img>
              <img src={pic3}></img>
            </div>
          </div>
        </div>
        <div
          className="bg-image"
          style={{
            backgroundColor: "#D9D9D9",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "85vh",
          }}
        >
          <div
            className={`animate-in-8 ${
              isVisible8 ? "show" : ""
            }  d-grid gap-3 `}
            onClick={resetScroll}
          >
            <div
              style={{ paddingTop: "4rem" }}
              className=" text-dark text-center"
            >
              <h1 className="">Kuliner Khas ketapang</h1>
            </div>
            <div
              style={{ lineHeight: "1px" }}
              className="text-dark text-center mt-3"
            >
              <p>
                Berada di kabupaten Ketapang seolah berada di surga karena meski
                berukuran kecil, namun pulau ini memiliki{" "}
              </p>
              <p>
                banyak destinasi wisata alam yang sangat menawan. Apalagi pulau
                Ketapang juga dikenal penuh dengan pilihan
              </p>
              <p>
                aneka kuliner yang kaya citarasa. Beberapa makanan khas
                daerahnya juga dianggap sebagai warisan kerajaan
              </p>
              <p>Buton, yang dulu pernah berjaya di Sulawesi Tenggara.</p>
              <div className="mt-5 d-flex justify-content-center align-items-baseline  ">
                <div className="w-75 ">
                  <Cardswiperkuliner></Cardswiperkuliner>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footercomponent />
      </div>
    </>
  );
};

export default Wisatapages;
