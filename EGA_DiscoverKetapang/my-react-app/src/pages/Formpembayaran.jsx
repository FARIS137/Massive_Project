import React, { useState } from "react";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import { Link } from "react-router-dom";
import Footercomponent from "../Component/Fragments/Footercomponent";

const Formpembayaran = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    package: "",
    guide: "",
    email: "",
    phone: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div
      className="bg"
      style={{
        background:
          "linear-gradient(0deg, rgba(11, 76, 113, 0.72) 22.58%, rgba(41,89,67) 67.9%)",
        paddingTop: "100px",
      }}
    >
      <Navbarwisata />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid white",
          marginLeft: "auto",
          marginRight: "auto",
          width: "70%",
          marginTop: "50px",
          borderRadius: "10px",
          position: "relative",
        }}
        className="mb-5"
      >
        <Link to="/paketwisata1">
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
            <h1 className="text-light ">Form Pemesanan Tiket</h1>
          </div>
        </div>
        <div className="d-flex justify-content-evenly mb-5">
          <form className="Formpembayaran">
            <div>
              <label for="fname">Nama Pemesan</label>
              <input type="text" id="nama" value="Chesa" name="nama"></input>
            </div>
            <br></br>
            <div>
              <label>Pesan Tiket</label>
              <input
                style={{
                  padding: "8px 10px 8px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
                type="number"
                name="tiket"
                min={0}
                value={2}
              />
            </div>
            <br></br>
            <div>
              <label>Tanggal</label>
              <input
                style={{
                  padding: "8px 10px 8px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
                type="date"
                name="tiket"
              />
            </div>
            <br></br>
            <div>
              <label>Paket Wisata</label>
              <select
                style={{
                  padding: "8px 10px 8px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <option value="Paket 1">Paket 1</option>
                <option value="Paket 2">Paket 2</option>
                <option value="Paket 3">Paket 3</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>Pemandu</label>
              <select
                style={{
                  padding: "8px 10px 8px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <option value="Pemandu 1">Nurhayati</option>
                <option value="Pemandu 2">Rendiansyah</option>
                <option value="Pemandu 3">Oktavia Putri</option>
              </select>
            </div>
            <br></br>
            <div>
              <label>Email</label>
              <input type="email" value="chesaolivia99@gmail.com"></input>
            </div>
            <br></br>
            <div>
              <label>No Telepon</label>
              <input
                style={{
                  padding: "8px 10px 8px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
                type="tel"
                value="085932441121"
              ></input>
            </div>
            <br></br>
            <div className="mb-5">
              <label>Metode Pembayaran</label>
              <select
                style={{
                  padding: "8px 10px 8px 10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <option value="Payment 1">QRIS</option>
                <option value="Payment 2">BCA</option>
                <option value="Payment 3">Mandiri</option>
              </select>
            </div>
            <br></br>
            <div className="mb-3">
              <Link
                style={{ marginLeft: "auto", marginRight: "auto" }}
                to="/payment"
              >
                <input
                  style={{
                    width: "200px",
                    backgroundColor: "#0D6EFD",
                    color: "White",
                    border: "none",
                    padding: "15px",
                    borderRadius: "6px",
                  }}
                  type="submit"
                  value="Pesan Sekarang"
                ></input>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footercomponent />
    </div>
  );
};

export default Formpembayaran;
