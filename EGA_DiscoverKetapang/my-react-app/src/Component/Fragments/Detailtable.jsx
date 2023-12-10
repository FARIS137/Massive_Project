import React from "react";

const detailTable = (props) => {
  return (
    <>
      <table
        style={{
          width: "600px",
          border: "1px solid white",
          color: "white",
          borderRadius: "12px",
          marginLeft: "80px",
          marginBottom: "30px",
        }}
      >
        <tr>
          <th
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              fontWeight: "500",
            }}
          >
            Alamat Lengkap
          </th>
          <td
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              fontWeight: "lighter",
            }}
          >
            {props.alamat}
          </td>
        </tr>
        <tr>
          <th
            style={{
              padding: "10px",
              fontWeight: "500",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
            }}
          >
            Hari Buka
          </th>
          <td
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              fontWeight: "lighter",
            }}
          >
            {props.hari}
          </td>
        </tr>
        <tr>
          <th
            style={{
              padding: "10px",
              fontWeight: "500",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
            }}
          >
            Jam Buka
          </th>
          <td
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              fontWeight: "lighter",
            }}
          >
            {props.jam}
          </td>
        </tr>
        <tr>
          <th
            style={{
              padding: "10px",
              fontWeight: "500",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
            }}
          >
            Harga Tiket Masuk
          </th>
          <td
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              fontWeight: "lighter",
            }}
          >
            {props.harga}
          </td>
        </tr>
        <tr>
          <th
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              fontWeight: "500",
            }}
          >
            Pemandu Wisata yang tersedia
          </th>
          <td
            style={{
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              borderLeft: "1px solid #ddd",
              fontWeight: "lighter",
            }}
          >
            <img
              style={{ borderRadius: "50%", marginRight: "10px" }}
              src={props.image1}
            ></img>
            <img
              style={{ borderRadius: "50%", marginRight: "10px" }}
              src={props.image2}
            ></img>
            <img
              style={{ borderRadius: "50%", marginRight: "10px" }}
              src={props.image3}
            ></img>
            <img style={{ borderRadius: "50%" }} src={props.image4}></img>
          </td>
        </tr>
      </table>
    </>
  );
};

export default detailTable;
