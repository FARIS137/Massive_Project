import CarouselWS from "../Component/Fragments/CarouselWisataS";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import bgimage from "../assets/img/wisata/wisataS/Background.png";
import bgimage2 from "../assets/img/wisata/wisataS/Background2.png";
import WisataScard from "../Component/Fragments/WisataScard";
import WisataScard2 from "../Component/Fragments/WisataScard2";
import PPicture from "../assets/img/wisata/wisataS/people2.png";
import React from "react";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const WisatapagesS = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const handleScroll = () => {
    const element1 = document.querySelector(".animate-in-1");
    const element2 = document.querySelector(".animate-in-2");
    const element3 = document.querySelector(".animate-in-3");
    const element4 = document.querySelector(".animate-in-4");
    const element5 = document.querySelector(".animate-in-5");

    if (element1) {
      const elementTop1 = element1.getBoundingClientRect().top;
      setIsVisible1(elementTop1 < window.innerHeight - 100);
    }

    if (element2) {
      const elementTop2 = element2.getBoundingClientRect().top;
      setIsVisible2(elementTop2 < window.innerHeight - 100);
    }

    if (element3) {
      const elementTop3 = element3.getBoundingClientRect().top;
      setIsVisible3(elementTop3 < window.innerHeight - 100);
    }

    if (element4) {
      const elementTop4 = element4.getBoundingClientRect().top;
      setIsVisible4(elementTop4 < window.innerHeight - 100);
    }
    if (element5) {
      const elementTop5 = element5.getBoundingClientRect().top;
      setIsVisible5(elementTop5 < window.innerHeight - 100);
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
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "85vh",
          fontFamily: "Times New Roman",
        }}
      >
        <Navbarwisata />
        <div
          className={`animate-in-1 ${isVisible1 ? "show" : ""}  `}
          onClick={resetScroll}
        >
          <div
            id="header-wrapper"
            style={{ paddingTop: "180px", marginRight: "60px" }}
            className="d-flex justify-content-end align-items-center"
          >
            <div id="header" className="w-766 text-light text-center">
              <h1
                style={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                }}
              >
                "Terlupakan dalam Waktu
              </h1>
              <h1
                style={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                }}
              >
                Jelajahi Masa Lalu di
              </h1>
              <h1
                style={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                }}
              >
                Destinasi Sejarah Kami."
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: `url(${bgimage2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "110vh",
          fontFamily: "Times New Roman",
        }}
      >
        <div
          className={`animate-in-2 ${isVisible2 ? "show" : ""} mx-5 `}
          onClick={resetScroll}
        >
          <div className="text-center">
            <h1 className="text-dark pt-5">Wisata Sejarah</h1>
            <div style={{ lineHeight: "10px" }} className="mt-4 mb-5">
              <p className="text-dark">
                Ketapang, Kalimantan Barat juga menawarkan sejumlah tempat
                wisata sejarah yang menarik. Berikut adalah beberapa destinasi
                sejarah di Ketapang.
              </p>
              <p className="text-dark">
                Berikut adalah beberapa destinasi sejarah di Ketapang
              </p>
            </div>
            <CarouselWS />
          </div>
        </div>
        <div
          className="bg-image img-fluid"
          style={{
            backgroundColor: "light",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
            fontFamily: "Times New Roman",
          }}
        >
          <div
            className={`animate-in-3 ${isVisible3 ? "show" : ""} mx-5 `}
            onClick={resetScroll}
          >
            <WisataScard />
          </div>
        </div>
        <div
          className={`animate-in-4 ${isVisible4 ? "show" : ""} mx-5 `}
          onClick={resetScroll}
        >
          <div
            className="bg-image img-fluid"
            style={{
              backgroundColor: "light",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "70vh",
              fontFamily: "Times New Roman",
            }}
          >
            <WisataScard2 />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{
                marginRight: "15rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{ fontWeight: "700", fontSize: "48px" }}
                className="text-center ms-5 fw-bold"
              >
                Jendela Ke Masa Lalu
              </h1>
              <p
                style={{ width: "500px", textAlign: "justify" }}
                className="ms-5 text-dark"
              >
                Wisata sejarah adalah cara yang penting untuk menghormati dan
                menjaga warisan budaya serta sejarah manusia, sambil memberikan
                manfaat edukatif, ekonomi, dan budaya. Ini memainkan peran kunci
                dalam menjembatani masa lalu dan masa kini, serta dalam
                mempromosikan pengertian dan perdamaian di antara berbagai
                budaya dan komunitas di seluruh dunia.
              </p>
            </div>
            <div className="position-relative top-0 start-0 mb-5">
              <img
                className="img-fluid position-relative top-0 start-0"
                src={PPicture}
                alt="Turis"
              />
            </div>
          </div>
        </div>
        <Footercomponent />
      </div>
    </>
  );
};

export default WisatapagesS;
