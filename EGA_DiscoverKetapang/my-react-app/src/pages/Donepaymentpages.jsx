import React from "react";
import Done from ".././assets/img/checklist.png";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";

const Donepayment = () => {
  const digits = Math.floor(Math.random() * 9000000000) + 1;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const d = new Date();
  let month = months[d.getMonth()];
  const year = today.getFullYear();
  const date = today.getDate();
  const data = {
    bookingName: "Chesa",
    bookingEmail: "chesaolivia99@gmail.com",
    bookingNoTelepon: "085932441121",
    bookingDate: "15 November 2023",
    bookingPemandu: "Nurhayati",
  };

  return (
    <>
      <div style={{ backgroundColor: "#404040" }}>
        <div
          className="bg pb-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(204.85, 187.42, 174.81, 0), rgba(11.25, 75.76, 113.48, 0.72))",
            paddingTop: "100px",
          }}
        >
          <Navbarwisata />
          <div className="detail-box mt-5 pb-5 mb-5">
            <div className="detail-header">
              <div>
                <h1 className="text-light fw-bold">
                  Pembayaran Telah Berhasil
                </h1>
              </div>
              <img className="mt-5 mb-5" src={Done}></img>
              <h1 className="text-center text-light">
                Terima Kasih telah menggunakan Discover Ketapang<br></br>Selamat
                Berliburan
              </h1>
            </div>
            <div
              style={{
                marginRight: "120px",
                marginLeft: "120px",
                fontSize: "24px",
              }}
              className="d-flex justify-content-between text-light mt-5"
            >
              <p>No Tiket {digits}</p>
              <p>
                Pembayaran Selesai {date} {month} {year}
              </p>
            </div>
            <div className="mt-3 text-light" style={{ marginLeft: "120px" }}>
              <div className="bookData">
                <p>
                  Nama <span style={{ marginLeft: "107px" }}>:</span>{" "}
                  {data.bookingName}
                </p>
                <p>
                  Email <span style={{ marginLeft: "113px" }}>:</span>{" "}
                  {data.bookingEmail}
                </p>
                <p>
                  {" "}
                  No. Telepon <span style={{ marginLeft: "63px" }}>:</span>{" "}
                  {data.bookingNoTelepon}
                </p>
                <p>
                  Booking Date <span style={{ marginLeft: "50px" }}>:</span>{" "}
                  {data.bookingDate}
                </p>
                <p>
                  Pemandu <span style={{ marginLeft: "78px" }}>:</span>{" "}
                  {data.bookingPemandu}
                </p>
              </div>
              <div className="mt-4 mb-5">
                <Link to="/datapemandu">
                  <button
                    className="rounded p-3"
                    style={{ marginRight: "35px", backgroundColor: "#2c8bc4" }}
                  >
                    Hubungi Pemandu
                  </button>
                </Link>
                <Link to="/home">
                  <button
                    style={{ backgroundColor: "#2c8bc4" }}
                    className="rounded p-3"
                  >
                    Kembali ke Beranda
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footercomponent />
      </div>
    </>
  );
};

export default Donepayment;
