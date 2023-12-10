import Navbarwisata from "../Component/Fragments/Navbarwisata";
import bgimage from "../assets/img/wisata/wisataA/background.png";
import Square1 from "../assets/img/wisata/wisataA/Square1.png";
import Square2 from "../assets/img/wisata/wisataA/Square2.png";
import Square3 from "../assets/img/wisata/wisataA/Square3.png";
import Picture1 from "../assets/img/wisata/wisataA/pic1.png";
import Picture2 from "../assets/img/wisata/wisataA/pic2.png";
import Picture3 from "../assets/img/wisata/wisataA/pic3.png";
import num1 from "../assets/img/wisata/wisataA/01.png";
import num2 from "../assets/img/wisata/wisataA/02.png";
import num3 from "../assets/img/wisata/wisataA/03.png";
import { useState, useEffect } from "react";
import React from "react";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";

const WisatapagesA = () => {
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
    <div id="background" style={{ backgroundColor: "#404040" }}>
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "110vh",
          fontFamily: "Times New Roman",
        }}
      >
        <Navbarwisata />
        <div
          className={`animate-in-1 ${isVisible1 ? "show" : ""} row `}
          onClick={resetScroll}
        >
          <div
            className="header-text"
            style={{
              display: "flex",
              paddingTop: "100px",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginLeft: "100px", marginBottom: "0" }}
              className="text-left mt-5 text-light"
            >
              <h1
                style={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                }}
              >
                Eksplorasi
              </h1>
              <h1
                style={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                }}
              >
                Keindahan Alam
              </h1>
              <h1
                style={{
                  marginBottom: "0",
                  fontSize: "60px",
                  fontWeight: "700",
                }}
              >
                Ketapang
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`animate-in-1 ${isVisible1 ? "show" : ""}  `}
          onClick={resetScroll}
        >
          <div style={{ marginRight: "50px" }}>
            <div className="d-flex flex-column align-items-end">
              <p className="mb-0 text-light fs-4 fw-bolder">POPULER</p>
              <hr
                className="text-light"
                style={{ borderWidth: "2px", width: "200px" }}
              />
            </div>
          </div>
          <div
            className={`animate-in-1 ${isVisible1 ? "show" : ""} mx-5 `}
            onClick={resetScroll}
          >
            <div className="d-flex justify-content-end align-items-center ">
              <div className="custom-img" style={{ position: "relative" }}>
                <a href="#Penjelasan1" style={{ position: "relative" }}>
                  <img
                    className="me-2 img-fluid rounded-2"
                    src={Square1}
                    alt="Square 1"
                  />
                  {/* <p
                  style={{
                    position: "absolute",
                    top: "350%",
                    left: 0,
                    right: 0,
                    transform: "translate(0, 0)",
                    backgroundColor: "rgba(192, 192, 192, 0.6)",
                    color: "black",
                    padding: "6px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  Pantai Katembe
                </p> */}
                </a>
                <a href="#Penjelasan2" style={{ position: "relative" }}>
                  <img
                    className="ms-2 me-2 img-fluid rounded-2"
                    src={Square2}
                    alt="Square 2"
                  />
                  {/* <p
                  style={{
                    position: "absolute",
                    top: "350%",
                    left: 0,
                    right: 0,
                    transform: "translate(0, 0)",
                    backgroundColor: "rgba(192, 192, 192, 0.6)",
                    color: "black",
                    padding: "6px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  Pantai Mutiara
                </p> */}
                </a>
                <a href="#Penjelasan3" style={{ position: "relative" }}>
                  <img
                    className=" ms-2 img-fluid rounded-2"
                    src={Square3}
                    alt="Square 3"
                  />
                  {/* <p
                  style={{
                    position: "absolute",
                    top: "350%",
                    left: 0,
                    right: 0,
                    transform: "translate(0, 0)",
                    backgroundColor: "rgba(192, 192, 192, 0.6)",
                    color: "black",
                    padding: "6px",
                    margin: "5px",
                    textAlign: "center",
                  }}
                >
                  Danau Anonotei
                </p> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-image img-fluid pb-5 "
        style={{
          background:
            "linear-gradient(180deg, rgba(204.85, 187.42, 174.81, 0), rgba(11.25, 75.76, 113.48, 0.72))",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "290",
          fontFamily: "Times New Roman",
        }}
      >
        <div
          className={`animate-in-2 ${
            isVisible2 ? "show" : ""
          } row mt-5 mx-auto px-5`}
          onClick={resetScroll}
        >
          <div className="A-header">
            <h1>Wisata Alam</h1>
            <hr></hr>
          </div>
        </div>
        <div
          className={`animate-in-3 ${
            isVisible3 ? "show" : ""
          } row mt-5 mx-auto px-5`}
          onClick={resetScroll}
        >
          <section id="Penjelasan1">
            <div className="d-flex align-items-center justify-content-around">
              <div className="text-light text-end">
                <img className="img-fluid" src={num1} alt="Number 1" />

                <div className="d-flex align-items-end justify-content-between">
                  <h2 style={{ textAlign: "right" }}>Bukit Batu Daya</h2>
                </div>
                <hr style={{ borderWidth: "3px" }} />
                <p style={{ textAlign: "justify", width: "590px" }}>
                  Bukit Batu Daya merupakan destinasi wisata yang paling
                  digemari. Bukit Batu Daya menawarkan pesona alam yang sangat
                  diminati oleh wisatawan. Dengan pemandangan yang menakjubkan,
                  destinasi ini menjadi tujuan favorit bagi para pengunjung.
                </p>
                <Link to="/detailwisataA1">
                  <button className="rounded-2 btn-more">Selengkapnya</button>
                </Link>
              </div>
              <div>
                <div className="user d-flex gap-4 ">
                  {/* <Link
                  to="/datapemandu"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconuser}
                    alt="user"
                    style={{
                      width: 20,
                      height: 23,
                    }}
                  />
                  <p>Cari pemandu</p>
                </Link>
                <Link
                  to="https://maps.app.goo.gl/W3ckT37NfRjh7rdU7"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconmap}
                    alt="map"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Maps</p>
                </Link> */}
                </div>
                <img className="img-fluids" src={Picture1} alt="Picture 1" />
              </div>
            </div>
          </section>
        </div>
        <div
          className={`animate-in-4 ${
            isVisible4 ? "show" : ""
          } row mt-5 mx-auto px-5`}
          onClick={resetScroll}
        >
          <section id="Penjelasan2">
            <div
              style={{ paddingTop: "50px" }}
              className="d-flex align-items-center justify-content-around flex-row-reverse"
            >
              <div className="text-light text-end">
                <img className="img-fluid" src={num2} alt="Number 2" />
                <div className="d-flex align-items-end justify-content-between">
                  <h2 style={{ textAlign: "right" }}>Pulai Pelapis</h2>
                </div>
                <hr style={{ borderWidth: "3px" }} />
                <p style={{ textAlign: "justify", width: "590px" }}>
                  Desa wisata pelapis merupakan desa yang memiliki berbagai
                  potensi keindahan alam, sumber daya yang melimpah dan atraksi.
                  Di sini kita bisa menikmanti keindahan alam bawah laut,
                  atraksi mancing, atraksi ngancau, dan lain nya. Desa pelapis
                  juga terkenal akan hasil laut nya yaitu ikan teri, cumi-cumi
                  dan lain nya.
                </p>
                <Link to="/detailwisataA2">
                  <button className="rounded-2 btn-more">Selengkapnya</button>
                </Link>
              </div>
              <div>
                <img className="img-fluid" src={Picture2} alt="Picture 2" />
              </div>
            </div>
          </section>
        </div>
        <div
          className={`animate-in-5 ${
            isVisible5 ? "show" : ""
          } row mt-5 mx-auto px-5`}
          onClick={resetScroll}
        >
          <section id="Penjelasan3">
            <div
              style={{ paddingTop: "50px" }}
              className="d-flex align-items-center justify-content-around"
            >
              <div className="text-light text-end">
                <img className="img-fluid" src={num3} alt="Number 3" />
                <div className="d-flex align-items-end justify-content-between">
                  <h2 style={{ textAlign: "right" }}>
                    Pantai Tanjung Belandang
                  </h2>
                </div>
                <hr style={{ borderWidth: "3px" }} />
                <p style={{ textAlign: "justify", width: "590px" }}>
                  Pantai Tanjung Belandang merupakan salah satu kawasan obyek
                  wisata berupa pantai yang terletak di Sungai Awan, Kecamatan
                  Matan Hilir Utara, Kabupaten Ketapang, Kalimantan Utara. Obyek
                  wisata ini merupakan salah satu kebanggaan masyarakat
                  Ketapang. Pantai ini selalu ramai dikunjungi oleh wisatawan
                  terutama pada hari libur.
                </p>
                <Link to="/detailwisataA3">
                  <button className="rounded-2 btn-more">Selengkapnya</button>
                </Link>
              </div>
              <div>
                <img className="img-fluid" src={Picture3} alt="Picture 3" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footercomponent />
    </div>
  );
};

export default WisatapagesA;
