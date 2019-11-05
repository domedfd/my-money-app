import React from "react";

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <b>DG</b>
      </span>
      <span className="logo-lg">
        <i className="fa fa-gittip"></i>
        <b> Dom</b>group
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
    </nav>
  </header>
);
