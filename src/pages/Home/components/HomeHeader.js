import React, { useRef } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import SocialChips from "./social-chips";

function HomeHeader() {
  const headerRef = useRef();

  const handleScroll = () => {
    if (headerRef) {
      try {
        const offset = window.pageYOffset;
        const base = headerRef.current.children;
        base[0].style.backgroundPositionY = offset * 0.2 + "px";
        base[1].style.backgroundPositionX = offset * 0.05 + "px";

        base[1].style.backgroundPositionY = offset * 0.3 + "px";

        base[2].style.backgroundPositionY = offset * 0.4 + "px";
        base[2].style.backgroundPositionX = -offset * 0.03 + "px";

        base[3].style.backgroundPositionY = offset * 0.3 + "px";
      } catch (e) {
        console.warn("Tet");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header>
      <Navbar />
      <div className="header--home" ref={headerRef}>
        <div className="header--home-overlay" />
        <div className="header--home-overlay" />
        <div className="header--home-overlay" />
        <div className="header--home-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 primary-purple">
              <div>Hello, I'm </div>
              <h1>Alan Dsilva</h1>
              <p className="pt-1">an aspiring Software Developer.</p>
            </div>
          </div>
        </div>
        <SocialChips />
      </div>
    </header>
  );
}

export default HomeHeader;
