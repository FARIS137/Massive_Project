import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../../src/assets/img/detailbg2.png";
import Jumbotron from "../Component/Fragments/JumbotronDW";
import pic1 from "../../src/assets/img/PP.png";
import Detailtable from "../Component/Fragments/Detailtable";
import guide1 from "../../src/assets/img/guide1.png";
import guide2 from "../../src/assets/img/guide2.png";
import guide3 from "../../src/assets/img/guide3.png";
import guide4 from "../../src/assets/img/guide4.png";
import more1 from "../../src/assets/img/detail1more.png";
import more2 from "../../src/assets/img/detail4more.png";
import more3 from "../../src/assets/img/detail3more.png";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const detailWisataA2 = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleScroll = () => {
    const element1 = document.querySelector(".animate-in-1");
    const element2 = document.querySelector(".animate-in-2");
    const element3 = document.querySelector(".animate-in-3");
    const element4 = document.querySelector(".animate-in-4");

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
        className="bg-image"
        style={{
          backgroundImage: `url(${Bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <Navbarwisata />
        <div
          className={`animate-in-1 ${isVisible1 ? "show" : ""} `}
          onClick={resetScroll}
        >
          <Jumbotron
            title="Nikmati Keindahan"
            subtitle="Alam Ketapang yang"
            subtitle2="Mempesona"
            body="Wisata Alam > Pulau Pelapis"
          />
        </div>
      </div>
      <div
        className="bg"
        style={{
          background:
            "linear-gradient(0deg, rgba(11, 76, 113, 0.72) 22.58%, rgba(41,89,67) 67.9%)",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div
          className={`animate-in-2 ${isVisible2 ? "show" : ""} `}
          onClick={resetScroll}
        >
          <div className="detail-box">
            <Link to="/wisataA">
              <svg
                className="back-button"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
              >
                <path
                  d="M30.3634 15.5H3M3 15.5L16.1344 3M3 15.5L16.1344 28"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="detail-header">
              <div>
                <h1 className="text-light">Pulau Pelapis</h1>
              </div>

              <hr></hr>
              <img className="image1" src={pic1}></img>
            </div>

            <div className="detail-text">
              <p>
                Pulau Pelapis, atau dikenal juga sebagai Pulau Kabung, terletak
                di muara Sungai Kapuas, yang merupakan sungai terpanjang di
                Indonesia, di pesisir utara Kalimantan Barat. Pulau ini,
                terletak sekitar 1-2 kilometer dari pantai, memiliki peran
                ekologis yang penting sebagai bagian dari ekosistem sungai dan
                pesisir. Fungsi ekologisnya mencakup penopang keanekaragaman
                hayati, menjadi habitat bagi flora dan fauna pesisir yang khas
              </p>
              <p>
                Lokasi pulau ini mendekat dengan muara sungai juga memengaruhi
                pola hidrologis sekitarnya, yang melibatkan perubahan air
                sungai, pasang-surut laut, dan sedimentasi sungai. Pulau Pelapis
                biasanya dapat diakses melalui transportasi air seperti perahu
                atau kapal, membuatnya potensial sebagai destinasi bagi
                peneliti, pengamat lingkungan, atau wisatawan yang tertarik
                dengan kehidupan pesisir.
              </p>
              <p>
                Selain itu, pulau ini mungkin memiliki peran dalam kehidupan
                masyarakat lokal, seperti sebagai area penangkapan ikan atau
                tempat berlabuh sementara para nelayan. Pulau-pulau kecil
                seperti Pulau Pelapis juga dapat memiliki dampak pada aspek
                sosial dan budaya masyarakat sekitarnya serta menjadi objek
                pemantauan lingkungan untuk memahami perubahan iklim dan
                ekosistem.
              </p>
            </div>
            <div
              className={`animate-in-3 ${isVisible3 ? "show" : ""}  mx-auto `}
              onClick={resetScroll}
            >
              <div className="detail-table">
                <h3 style={{ color: "White" }}>Informasi Wisata</h3>
              </div>
              <Detailtable
                alamat="Desa Pelapis, Kepulauan Karimata, Kabupaten Kayong Utara, Kalimantan Barat"
                hari="Senin - Ahad"
                jam="08.00 - 17.00 WIB"
                harga="IDR 10.000"
                image1={guide1}
                image2={guide2}
                image3={guide3}
                image4={guide4}
              />
            </div>
            <div
              className={`animate-in-4 ${isVisible4 ? "show" : ""}  mx-auto `}
              onClick={resetScroll}
            >
              <div className="detail-more">
                <h2 style={{ marginLeft: "80px", color: "white" }}>
                  Kunjungi Destinasi Wisata yang lain
                </h2>
                <div className="more-pic">
                  <Link style={{ textDecoration: "none" }} to="">
                    <div
                      style={{
                        backgroundImage: `url(${more1})`,
                        backgroundRepeat: "no-repeat",
                        height: "40vh",
                        width: "300px",
                      }}
                    >
                      <p>Pantai Tanjung Belandang</p>
                    </div>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="">
                    <div
                      style={{
                        backgroundImage: `url(${more2})`,
                        backgroundRepeat: "no-repeat",
                        height: "40vh",
                        width: "300px",
                      }}
                    >
                      <p>Bukit Batu Daya</p>
                    </div>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="">
                    <div
                      style={{
                        backgroundImage: `url(${more3})`,
                        backgroundRepeat: "no-repeat",
                        height: "40vh",
                        width: "300px",
                      }}
                    >
                      <p>Air Terjun Batu Arang</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default detailWisataA2;
