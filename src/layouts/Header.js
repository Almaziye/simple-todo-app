import React from "react";

function Header() {
  const Headerstyle = {
    backgroundColor: "#678c89",
    color: "#fff",
    padding: "10px 15px",
  };
  return (
    <header style={Headerstyle}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          lineHeight: "1.4",
          margin: "0px",
        }}
      >
        Simple Todo App
      </h1>
    </header>
  );
}

export default Header;
