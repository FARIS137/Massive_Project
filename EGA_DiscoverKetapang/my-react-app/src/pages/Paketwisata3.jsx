import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Bgimage from "../../public/images/bgpaket.png";
import Jumbotron from "../Component/Fragments/JumbotronDW";
import pic1 from "../../src/assets/img/BBD.png";
import Detailtable from "../Component/Fragments/Detailtable";
import guide1 from "../../src/assets/img/guide1.png";
import guide2 from "../../src/assets/img/guide2.png";
import guide3 from "../../src/assets/img/guide3.png";
import guide4 from "../../src/assets/img/guide4.png";
import more1 from "../../src/assets/img/detail1more.png";
import more2 from "../../src/assets/img/detail2more.png";
import more3 from "../../src/assets/img/detail3more.png";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Paketwisata1 = () => {
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
            title="Bersama kami "
            subtitle="Menjelajahi Ketapang"
            subtitle2="Dengan Menyenangkan"
          />
        </div>
      </div>
      <div
        className="bg"
        style={{
          background:
            "linear-gradient(0deg, rgba(11, 76, 113, 0.72) 22.58%, #a49d9d",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div
          className={`animate-in-2 ${isVisible2 ? "show" : ""} `}
          onClick={resetScroll}
        >
          <div className="detail-box">
            <Link to="/Home">
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
                <h1 className="text-light">Daftar Paket Wisata</h1>
              </div>

              <hr></hr>
              {/* <img className="image1" src={pic1}></img> */}
            </div>

            {/* <div className="detail-text">
              <p>
                Bukit Batu Daya, dengan megahnya sebagai batu raksasa, menghiasi
                perbatasan Kecamatan Laor dan Kecamatan Sukadana, Simpang Hilir,
                Kayong Utara, Kalimantan Barat. Berlokasi berdekatan dengan
                Gunung Palung, bukit ini termasuk dalam wilayah Taman Nasional
                Gunung Palung (TNGP), menawarkan ketinggian mencapai 958 meter
                di atas permukaan laut. Keberadaannya telah menjadikan Bukit
                Batu Daya sebagai destinasi idaman para pecinta alam, terutama
                bagi para pendaki yang menemukan daya tarik khusus di puncaknya.
              </p>
              <p>
                Jalur pendakian yang paling diminati adalah melalui Dusun
                Keranji, Desa Batu Daya, Kecamatan Simpang Dua, yang terkenal
                karena kemudahannya. Perjalanan dari Pontianak menuju Batu Daya
                bisa dilakukan melalui rute Aur Kuning, dengan jarak tempuh
                sekitar 4-5 jam melewati Sungai Laur, di mana tersedia beberapa
                penginapan untuk istirahat. Namun, di balik keindahan dan
                ketenangan Bukit Batu Daya, terdapat sisi yang menantang dan
                berbahaya, menambahkan nuansa petualangan bagi pengunjung yang
                berani.
              </p>
              <p>
                Keunikan Bukit Batu Daya tidak hanya terletak pada panorama
                alamnya yang menakjubkan. Bukit ini mampu memperdaya pandangan
                dengan memberikan tampilan yang berbeda-beda tergantung dari
                sudut mana kita melihatnya. Terkadang terlihat kokoh dan
                persegi, disebut sebagai Bukit Gantang atau takaran padi, namun
                berganti menjadi seperti punuk unta ketika dilihat dari sisi
                berbeda. Sifat ini memberikan daya tarik tambahan, menciptakan
                suasana misterius di sekitar Bukit Batu Daya.
              </p>
              <p>
                Selain panorama yang memukau, Bukit Batu Daya menyimpan legenda
                lokal yang membentuk sejarahnya. Konon, julukan Bukit Batu Daya
                berasal dari kisah seorang ibu dan anak bernama Daya yang
                tinggal di suatu kampung di Kalimantan Barat. Cerita tersebut
                menciptakan nuansa mistis dan memperkaya pengalaman wisatawan
                yang mencari lebih dari sekadar keindahan alam. Setiap tahunnya,
                masyarakat setempat menggelar ritual di Bukit Batu Daya,
                menganggapnya sebagai tempat yang keramat dan berusaha untuk
                melestarikan warisan budaya mereka. Dengan segala kekayaan alam
                dan cerita yang belum sepenuhnya tergali, pemerintah lokal
                berusaha untuk memperkenalkan pesona Bukit Batu Daya kepada
                dunia, menjadikannya sebagai destinasi wisata yang tak hanya
                memikat mata tetapi juga menyimpan sejarah dan kearifan lokal
                yang menarik.
              </p>
            </div> */}
            {/* <div
              className={`animate-in-3 ${isVisible3 ? "show" : ""}  mx-auto `}
              onClick={resetScroll}
            >
              <div className="detail-table">
                <h3 style={{ color: "White" }}>Informasi Wisata</h3>
              </div>
              <Detailtable
                alamat="Lubuk Batu, Kec. Simpang Hilir, Kabupaten Ketapang, Kalimantan Barat 78853"
                hari="Senin-Ahad"
                jam="08.00 - 17.00 WIB"
                harga="IDR 10.000"
                image1={guide1}
                image2={guide2}
                image3={guide3}
                image4={guide4}
              />
            </div> */}
            <div
              className={`animate-in-4 ${isVisible4 ? "show" : ""}  mx-auto `}
              onClick={resetScroll}
            >
              <div className="detail-more">
                {/* <h2 style={{ marginLeft: "80px", color: "white" }}>
                  Kunjungi Destinasi Wisata yang lain
                </h2> */}
                <div className="more-pic">
                  <Link to="">
                    <div
                      style={{
                        backgroundImage: `url(${more1})`,
                        backgroundRepeat: "no-repeat",
                        // height: "40vh",
                        width: "300px",
                        height: "300px",
                        position: "relative",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          position: "absolute",
                          marginLeft: "6rem",
                        }}
                      >
                        Paket 1
                      </h3>
                      <p
                        style={{
                          marginLeft: "1rem",
                          position: "absolute",
                          paddingTop: "50px",
                        }}
                      >
                        Mulai dari:
                      </p>
                      <h5
                        style={{
                          color: "white",
                          marginLeft: "1rem",
                          position: "absolute",
                          paddingTop: "80px",
                        }}
                      >
                        RP.250.000,00
                      </h5>
                      <ul
                        style={{
                          color: "white",
                          position: "absolute",
                          paddingTop: "110px",
                        }}
                      >
                        <li>Bukit Batu Daya</li>
                        <li>Air Terjun Batu Arang</li>
                        <li>Pantai Tanjung Belandang</li>
                        <li>Tugu Ale-Ale</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginLeft: "4rem",
                          marginTop: "13.5rem",
                        }}
                      >
                        <Link
                          to="/form"
                          className="text-white text-decoration-none"
                        >
                          Pesan Sekarang
                        </Link>
                      </button>
                    </div>
                  </Link>
                  <Link to="">
                    <div
                      style={{
                        backgroundImage: `url(${more3})`,
                        backgroundRepeat: "no-repeat",
                        // height: "40vh",
                        width: "300px",
                        height: "300px",
                        position: "relative",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          position: "absolute",
                          marginLeft: "6rem",
                        }}
                      >
                        Paket 1
                      </h3>
                      <p
                        style={{
                          marginLeft: "1rem",
                          position: "absolute",
                          paddingTop: "50px",
                        }}
                      >
                        Mulai dari:
                      </p>
                      <h5
                        style={{
                          color: "white",
                          marginLeft: "1rem",
                          position: "absolute",
                          paddingTop: "80px",
                        }}
                      >
                        RP.250.000,00
                      </h5>
                      <ul
                        style={{
                          color: "white",
                          position: "absolute",
                          paddingTop: "110px",
                        }}
                      >
                        <li>Bukit Batu Daya</li>
                        <li>Air Terjun Batu Arang</li>
                        <li>Pantai Tanjung Belandang</li>
                        <li>Tugu Ale-Ale</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginLeft: "4rem",
                          marginTop: "13.5rem",
                        }}
                      >
                        <Link
                          to="/form"
                          className="text-white text-decoration-none"
                        >
                          Pesan Sekarang
                        </Link>
                      </button>
                    </div>
                  </Link>
                  <Link to="">
                    <div
                      style={{
                        backgroundImage: `url(${more2})`,
                        backgroundRepeat: "no-repeat",
                        width: "300px",
                        height: "300px",
                        position: "relative",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          position: "absolute",
                          marginLeft: "6rem",
                        }}
                      >
                        Paket 1
                      </h3>
                      <p
                        style={{
                          marginLeft: "1rem",
                          position: "absolute",
                          paddingTop: "50px",
                        }}
                      >
                        Mulai dari:
                      </p>
                      <h5
                        style={{
                          color: "white",
                          marginLeft: "1rem",
                          position: "absolute",
                          paddingTop: "80px",
                        }}
                      >
                        RP.250.000,00
                      </h5>
                      <ul
                        style={{
                          color: "white",
                          position: "absolute",
                          paddingTop: "110px",
                        }}
                      >
                        <li>Bukit Batu Daya</li>
                        <li>Air Terjun Batu Arang</li>
                        <li>Pantai Tanjung Belandang</li>
                        <li>Tugu Ale-Ale</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        style={{
                          marginLeft: "4rem",
                          marginTop: "13.5rem",
                        }}
                      >
                        <Link
                          to="/form"
                          className="text-white text-decoration-none"
                        >
                          Pesan Sekarang
                        </Link>
                      </button>
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

export default Paketwisata1;
