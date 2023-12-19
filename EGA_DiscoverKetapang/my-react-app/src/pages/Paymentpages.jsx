import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarwisata from "../Component/Fragments/Navbarwisata";

const Paymentpages = () => {
  const [totalHargaSemua, setTotalHargaSemua] = useState(0);
  const location = useLocation();
  const { id, nama, tiket, tanggal, email, paket_wisata, No_hp } =
    location.state;

  // Harga tiket dan paket
  const hargaPaket = 250000;
  // const hargaTiket = 10000;
  const totalHarga = tiket * hargaPaket;

  // Format harga dengan mata uang IDR
  const totalHargaFormatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(totalHarga);

  // Hitung total harga paket
  let totalHargaPaket;
  switch (paket_wisata) {
    case "Paket 1":
    case "Paket 2":
    case "Paket 3":
      totalHargaPaket = 0;
      break;
    default:
      totalHargaPaket = 0;
  }

  // Hitung total harga semua
  useEffect(() => {
    // Hitung totalHargaSemua dan atur state
    const totalHargaSemuaValue = totalHarga + totalHargaPaket;
    setTotalHargaSemua(totalHargaSemuaValue);
  }, [totalHarga, totalHargaPaket]);

  // useEffect(() => {
  //   setToken(location.state.token);
  // }, [location.state.token]);

  const handlePayment = async () => {
    try {
      const data = {
        id: id,
        nama: nama,
        tiket: tiket,
        tanggal: tanggal,
        email: email,
        paket_wisata: paket_wisata,
        No_hp: No_hp,
        totalHargaSemua: totalHargaSemua,
      };

      const response = await fetch(
        "http://localhost:5000/api/payments/payments-tiket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response) {
        const responseData = await response.json();

        // Snap.js script has loaded, set up additional event handlers
        window.snap.pay(responseData.token, {
          onSuccess: function (result) {
            // Payment success, you can redirect to a success page or handle accordingly
            console.log("Payment success:", result);
          },
          onPending: function (result) {
            // Payment is pending, you can redirect to a pending page or handle accordingly
            console.log("Payment pending:", result);
          },
          onError: function (result) {
            // Payment error, you can redirect to an error page or handle accordingly
            console.error("Payment error:", result);
          },
        });
      } else {
        // Handle error, show a message, or redirect to an error page
        console.error("Payment API error:", response.statusText);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Error during payment:", error.message);
    }
  };

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    // Perbaikan typo di sini
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;
    scriptTag.type = "text/javascript";
    scriptTag.async = true; // Set async attribute to load script asynchronously

    const midtransClientKey = "SB-Mid-client-WOoPPbfnTN9f1vOr";
    scriptTag.setAttribute("data-client-key", midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
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
                  <div className="mx-4 mt-4">
                    <p>
                      <span className="fw-bold">Nama</span>
                      <span className="fw-bold" style={{ marginLeft: "107px" }}>
                        :
                      </span>{" "}
                      {nama}
                    </p>
                    <p>
                      <span className="fw-bold">Email</span>
                      <span className="fw-bold" style={{ marginLeft: "113px" }}>
                        :
                      </span>{" "}
                      {email}
                    </p>
                    <p>
                      <span className="fw-bold">No.Telepon</span>{" "}
                      <span className="fw-bold" style={{ marginLeft: "63px" }}>
                        :
                      </span>{" "}
                      {No_hp}
                    </p>
                    <p>
                      <span className="fw-bold">Booking Date</span>
                      <span className="fw-bold" style={{ marginLeft: "50px" }}>
                        :
                      </span>{" "}
                      {tanggal}
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="mx-4">
                  <h3>Detail Harga</h3>
                  <div className="mt-4">
                    <div>
                      <div className="d-flex justify-content-between mx-3">
                        <p className="fw-bold">Paket  </p>
                        <p className="fw-bold" style={{ color: "#239BD8" }}>
                          {tiket} orang
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mx-3">
                      <p className="fw-bold">Harga {paket_wisata} * {tiket}</p>
                      <p className="fw-bold" style={{ color: "#239BD8" }}>
                        {totalHargaFormatted}
                      </p>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between mx-3">
                      <p className=" fw-bold">Total Harga</p>
                      <p className="fw-bold" style={{ color: "#239BD8" }}>
                        {totalHargaSemua > 0
                          ? `Rp ${totalHargaSemua.toLocaleString("id-ID")}`
                          : "-"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-4">
                  <button
                    onClick={handlePayment}
                    className="w-100 p-3 rounded mb-4"
                    style={{ backgroundColor: "#0D6EFD" }}
                  >
                    Bayar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footercomponent />
        </div>
      </div>
    </>
  );
};

export default Paymentpages;
