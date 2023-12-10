import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import foto2 from "/images/daerah.png";
import { Link } from "react-router-dom";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Cardartikel from "../Component/Fragments/cardwisataartikel";

const Artikelpages = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  useEffect(() => {
    setTimeout(() => {
      handleShowContent();
    }, 1000);
  }, []);

  return (
    <>
      <div id="background1">
        <Navbarwisata />
        <div
          className={`text-light d-flex justify-content-center align-items-center flex-column ${
            showContent ? "slide-in" : "" // Apply the slide-in class conditionally
          }`}
          style={{ minHeight: "80vh" }}
        >
          <div
            style={{ lineHeight: "0", position: "absolute" }}
            className="text-center"
          >
            <p>-Tentang-</p>
            <h1>Kabupaten Ketapang</h1>
          </div>
        </div>
        <Container>
          <div id="header-penjelasan" style={{ marginTop: "6rem" }}>
            <h1>Sejarah Singkat</h1>
          </div>
          <div id="penjelasan" className="d-flex align-items-center">
            <div>
              <p
                id="text-penjelasan"
                className={showContent ? "show-content" : ""}
              >
                Pada masa pemerintahan Hindia Belanda, Kabupaten Ketapang
                merupakan bagian dari Afdeling di bawah Residentis Westerm
                Afdeling Van Borneo. Kabupaten ini dibagi menjadi tiga Onder
                Afdeling yang dipimpin oleh seorang Wedana, dan terdiri dari
                tiga kerajaan yang dipimpin oleh seorang Panembahan. Setelah
                kedatangan Jepang pada tahun 1942 dan masa kemerdekaan Republik
                Indonesia, Kabupaten Ketapang tetap berstatus Afdeling yang
                diambil alih oleh Jepang. Setelah itu, berdasarkan
                Undang-undang, Ketapang dibagi menjadi tiga daerah swapraja yang
                kemudian digabung menjadi sebuah federasi. Kemudian, pada tahun
                1956, Kabupaten Ketapang mendapat status sebagai daerah otonom
                dalam Propinsi Kalimantan Barat, dengan seorang Bupati sebagai
                Kepala Daerah. Pada tahun 2007, wilayah ini mengalami pemekaran
                menjadi Kabupaten Kayong Utara.
              </p>
            </div>
            <div className="text-image-container">
              <div className="d-flex flex-column justify-content-center align-items-start">
                <img
                  src={foto2}
                  alt="Foto 2"
                  style={{ marginBottom: "3rem" }}
                />
              </div>
            </div>
          </div>
          <Cardartikel />
          <div className="d-flex flex-column align-items-center">
            <div
              className="image-containers mt-5 "
              style={{
                width: "95%",
                height: "250px",
                borderRadius: "15px",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/wisataA">
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: "100px",
                    color: "white",
                    fontSize: "64px",
                  }}
                >
                  Wisata Alam
                </h1>
              </Link>
            </div>

            <div
              className="image-containers2 mt-5 "
              style={{
                width: "95%",
                height: "250px",
                borderRadius: "15px",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/wisataS">
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: "100px",
                    color: "white",
                    fontSize: "64px",
                  }}
                >
                  Wisata Sejarah
                </h1>
              </Link>
            </div>
            <div
              className="image-containers3 mt-5 mb-5"
              style={{
                width: "95%",
                height: "250px",
                borderRadius: "15px",
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/wisata">
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: "100px",
                    color: "white",
                    fontSize: "64px",
                  }}
                >
                  Wisata Budaya
                </h1>
              </Link>
            </div>
          </div>
        </Container>
        <Footercomponent />
      </div>
    </>
  );
};

export default Artikelpages;
