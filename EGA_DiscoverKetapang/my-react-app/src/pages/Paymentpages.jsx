import React from "react";
import { Link } from "react-router-dom";
import Qris from "../../src/assets/img/Qris.png";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarwisata from "../Component/Fragments/Navbarwisata";

const Paymentpages = () => {
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
    bookingPemandu: "Nurhayati",
  };
  return (
    <>
      <div
        className="bg"
        style={{
          background:
            "linear-gradient(0deg, rgba(11, 76, 113, 0.72) 22.58%, rgba(41,89,67) 67.9%)",

          paddingTop: "100px",
        }}
      >
        <Navbarwisata />
        <div className="detail-box mt-5 mb-5">
          <Link to="/form">
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
              <h1 className="text-light ">Halaman Pembayaran</h1>
            </div>
            <div
              className="white-box bg-white mb-5 mt-5"
              style={{ width: "85%" }}
            >
              <div className="dataP mx-4 mt-5 mb-2">
                <h3>Data Pemesanan</h3>
                <div className="mx-4">
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
                    No. Telepon <span style={{ marginLeft: "63px" }}>
                      :
                    </span>{" "}
                    {data.bookingNoTelepon}
                  </p>
                  <p>
                    Booking Date <span style={{ marginLeft: "50px" }}>:</span>{" "}
                    {date} {month} {year}
                  </p>
                </div>
              </div>
              <hr></hr>
              <div className="mx-4">
                <h3>Detail Harga</h3>
                <hr></hr>
                <div>
                  <div className="d-flex justify-content-between mx-3">
                    <p>Tiket Wisata x 2</p>
                    <p style={{ color: "#239BD8" }}>Rp 25.000</p>
                  </div>
                  <div className="d-flex justify-content-between mx-3">
                    <p>Paket 1</p>
                    <p style={{ color: "#239BD8" }}>Rp 350.000</p>
                  </div>
                  <hr></hr>
                  <div className="d-flex justify-content-between mx-3">
                    <p className=" fw-bold">Total Harga</p>
                    <p className="fw-bold" style={{ color: "#239BD8" }}>
                      Rp. 375.000
                    </p>
                  </div>
                </div>
                <div
                  className=" text-center fw-bold "
                  style={{ fontSize: "24px" }}
                >
                  <span style={{ color: "#5BBCFC" }}>Discover</span>
                  <br></br>
                  <span style={{ color: "#5BBCFC" }}>Ketapang.</span>
                  <br></br>
                  <img className="mb-5" src={Qris}></img>
                </div>
              </div>
              <div className="mx-4">
                <Link to="/done">
                  <button
                    className="w-100 p-3 rounded mb-4"
                    style={{ backgroundColor: "#0D6EFD" }}
                  >
                    Bayar Sekarang
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

export default Paymentpages;
