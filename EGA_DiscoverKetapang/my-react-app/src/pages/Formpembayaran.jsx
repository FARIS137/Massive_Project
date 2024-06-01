import React, { useState } from "react";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import { Link } from "react-router-dom";
import Footercomponent from "../Component/Fragments/Footercomponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { Button } from "react-bootstrap";

const Formpembayaran = () => {
  const [nama, setNama] = useState("");
  const [tiket, setTiket] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [email, setEmail] = useState("");
  const [paket_wisata, setPaket] = useState("");
  const [pemandu, setPemandu] = useState("");
  const [No_hp, setNohp] = useState("");
  const navigation = useNavigate();
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({});

  const payment = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/formpayment", {
        nama,
        tiket,
        tanggal,
        email,
        paket_wisata,
        pemandu,
        No_hp,
      });
      navigation("/payment", {
        state: {
          ...formData,
          nama,
          tanggal,
          email,
          No_hp,
          tiket,
          paket_wisata,
          pemandu,
        },
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <div style={{ backgroundColor: "#404040" }}>
      <div
        className="bg pb-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(204.85, 187.42, 174.81, 0), rgba(11.25, 75.76, 113.48, 0.72))",
          paddingTop: "50px",
          paddingBottom: "50px",
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
<<<<<<< HEAD
              <h1 className="text-light ">Form Pemesanan Tiket</h1>
=======
              <h1 className="text-light ">Form Pemesanan Wisata</h1>
>>>>>>> d049bd8e5b7d283e06b6403db79a9622bc2707e8
            </div>
          </div>
          <div className="d-flex justify-content-evenly mb-5">
            <p className="has text-centered">{msg}</p>
            <form onSubmit={payment} className="Formpembayaran">
              <div>
                <label htmlFor="fname">Nama Pemesan</label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  onChange={(e) => setNama(e.target.value)}
                ></input>
              </div>
              <br></br>
              <div>
                <label>Pesan Paket </label>
                <input
                  style={{
                    padding: "8px 10px 8px 10px",
                    borderRadius: "5px",
                    border: "none",
                  }}
                  type="number"
                  name="tiket"
                  onChange={(e) => setTiket(e.target.value)}
                />
              </div>
              <br></br>
              <div>
                <label>Tanggal Booking</label>
                <input
                  style={{
                    padding: "8px 10px 8px 10px",
                    borderRadius: "5px",
                    border: "none",
                  }}
                  type="date"
                  name="tanggal"
                  onChange={(e) => setTanggal(e.target.value)}
                />
              </div>
              <br></br>
              <div>
                <label>Paket Wisata</label>
                <select
                  onChange={(e) => setPaket(e.target.value)}
                  style={{
                    padding: "8px 10px 8px 10px",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Paket
                  </option>

                  <option value="Paket 1">Paket 1</option>
                  <option value="Paket 2">Paket 2</option>
                  <option value="Paket 3">Paket 3</option>
                </select>
              </div>
              <br></br>
              <div>
                <label>Pemandu</label>
                <select
                  onChange={(e) => setPemandu(e.target.value)}
                  style={{
                    padding: "8px 10px 8px 10px",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Pemandu
                  </option>
                  <option value="Nurhayati">Nurhayati</option>
                  <option value="Rendiansyah">Rendiansyah</option>
                  <option value="Oktavia Putri">Oktavia Putri</option>
                </select>
              </div>
              <br></br>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
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
                  onChange={(e) => setNohp(e.target.value)}
                ></input>
              </div>
              <br></br>-<br></br>
              <div className="mb-3">
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
              </div>
            </form>
          </div>
        </div>
        <Footercomponent />
      </div>
    </div>
  );
};

export default Formpembayaran;
