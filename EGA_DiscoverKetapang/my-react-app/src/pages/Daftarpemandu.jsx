import Navbarcomponent from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Daftarpemanduimg from "../assets/img/pemandu/Daftarpemanduimg.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Daftarpemandu = () => {
  const [nama_lengkap, setNama] = useState("");
  const [jenis_kelamin, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [No_Handphone, setNumber] = useState("");
  const [cv, setCV] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (showPopup) {
      // Reset form fields
      setNama("");
      setGender("");
      setEmail("");
      setNumber("");
      setCV("");

      // Hide the pop-up after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // Clean up the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [showPopup]);

  const showErrorMessage = (message) => {
    console.error(message);
    // alert(message);
  };

  const Register = async (e) => {
    e.preventDefault();

    try {
      if (!nama_lengkap || !jenis_kelamin || !email || !No_Handphone || !cv) {
        throw new Error("Silahkan isi semua field");
      }

      const formData = new FormData();
      formData.append("nama_lengkap", nama_lengkap);
      formData.append("jenis_kelamin", jenis_kelamin);
      formData.append("email", email);
      formData.append("No_Handphone", No_Handphone);
      formData.append("cv", cv);
      const response = await axios.post(
        "http://localhost:5000/daftarPemandu",
        formData,
        {}
      );

      console.log("Server Response:", response);
      togglePopup();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="profil  h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Daftarpemanduimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "85vh",
          }}
        >
          <Navbarcomponent></Navbarcomponent>
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <h1 className="teks-gabung text-white display-5 fw-bold text-center w-50  ">
              Tertarik untuk bergabung menjadi Pemandu Discover Ketapang?
            </h1>
          </div>
          <div className="daftar-pemandu justify-content-center d-flex align-items-center">
            <h2 className="text-center text-white fw-bold w-50 ">
              DAFTAR MENJADI PEMANDU WISATA
            </h2>
          </div>
        </div>

        <h6 className="text-center text-white fw-bold mt-5">
          Harap Isi data dibawah ini dengan benar{" "}
        </h6>

        <div className="form-daftar ">
          <div className="form-daftar1 mb-5 mt-4">
            <div className="d-flex justify-content-center align-items-center gap-5">
              <div>
                <form onSubmit={Register} encType="multipart/form-data">
                  <div className="form-group d-flex gap-3">
                    <label className="label" htmlFor="nama">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      placeholder="Masukkan Nama"
                      value={nama_lengkap}
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex gap-3  ">
                    <label className="label-jk " htmlFor="jenisKelamin">
                      Jenis Kelamin
                    </label>
                    <div className="form-check form-check-inline  ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jenisKelamin"
                        id="lakiLaki"
                        checked={jenis_kelamin === "Laki-Laki"}
                        onChange={() => setGender("Laki-Laki")}
                      />
                      <label className="form-check " htmlFor="lakiLaki">
                        Laki-Laki
                      </label>
                    </div>
                    <div className="form-check  form-check-inline ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="jenisKelamin"
                        id="perempuan"
                        checked={jenis_kelamin === "Perempuan"}
                        onChange={() => setGender("Perempuan")}
                      />
                      <label className="form-check label" htmlFor="perempuan">
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div className="form-group d-flex gap-3 ">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="email"
                      placeholder="Masukkan Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex gap-3 ">
                    <label className="label" htmlFor="nomorHP">
                      No Hp/Wa
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="nomorHP"
                      placeholder="Masukkan Nomor Hp/Wa"
                      value={No_Handphone}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <div className="form-group d-flex gap-3 ">
                    <label className="label label-uf" htmlFor="file">
                      Unggah CV{" "}
                    </label>
                    <input
                      type="file"
                      className="form-control-file ms-5"
                      name="cv"
                      id="file"
                      accept=".pdf, .doc, .docx"
                      onChange={(e) => setCV(e.target.files[0])}
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <input
                      style={{ backgroundColor: "2c8bc4", color: "white" }}
                      className=" submit-button"
                      type="submit"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="popup text-center">
            <p
              style={{
                margin: "0",
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              REGISTER BERHASIL!!!
            </p>
          </div>
        )}
      </div>
      <Footercomponent></Footercomponent>
    </>
  );
};

export default Daftarpemandu;
