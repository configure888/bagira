import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-links-component">
        <a
          href="/#home"
          id="nav-home"
          className="nav-link home max-w-full h-full inline-block"
        >
          <div className="josefin-400-13">home</div>

          <div className="nav-ball"></div>
        </a>
        <a
          href="/#about"
          id="nav-about"
          className="nav-link about max-w-full h-full inline-block"
        >
          <div className="josefin-400-13">about</div>

          <div className="nav-ball"></div>
        </a>
        <a
          href="/#artwork"
          id="nav-artwork"
          className="nav-link artwork max-w-full h-full inline-block"
        >
          <div className="josefin-400-13">artwork</div>

          <div className="nav-ball"></div>
        </a>
        <a
          href="/#shop"
          id="nav-shop"
          className="nav-link shop max-w-full h-full inline-block"
        >
          <div className="josefin-400-13"> shop</div>

          <div className="nav-ball"></div>
        </a>
        <a
          href="/#gallery"
          id="nav-gallery"
          className="nav-link gallery max-w-full h-full inline-block"
        >
          <div className="josefin-400-13">the gallery</div>

          <div className="nav-ball"></div>
        </a>
        <a
          href="/#murals"
          id="nav-murals"
          className="nav-link location max-w-full h-full inline-block"
        >
          <div className="josefin-400-13">murals</div>

        

          <div className="nav-ball"></div>
        </a>
      </div>

      <div className="nav-link-inquire">
        {/* <a href="/pt" className="nav-link lingua max-w-full h-full inline-block">
          <div className="josefin-400-13">pt</div>

          <div className="nav-ball"></div>
        </a> */}
        <a href="#" className="nav-link inquire max-w-full h-full inline-block">
          <div className="josefin-400-13">inquire</div>

          <div className="nav-ball"></div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
