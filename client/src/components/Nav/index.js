import React from "react";
import "./Style.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">
    React Book Search
  </a>
  <a className="right" href="/">Search</a>
  <a className="right" href="/saved">Saved</a>
</nav>
);

export default Nav;