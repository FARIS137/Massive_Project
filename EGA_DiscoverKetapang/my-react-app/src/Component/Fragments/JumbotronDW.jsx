import React from "react";

function Jumbotron(props) {
  return (
    <div
      className="jumbotron"
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: "50px",
        lineHeight: "normal",
      }}
    >
      <p style={{ margin: "0" }}>{props.title}</p>
      <p style={{ margin: "0" }}>{props.subtitle}</p>
      <p style={{ marginBottom: "10px" }}>{props.subtitle2}</p>
      <h4 style={{ margin: "0" }}>{props.body}</h4>
    </div>
  );
}

export default Jumbotron;
