import React, { useState, useEffect } from "react";
// import { a href=""  "react-router-dom";
import "./Header.css";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

function Header() {
  // const [showMenu, setShowMenu] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={navbar ? "header active" : "header"}>
        <div>
          <h1 className="logo">Ayanle</h1>
        </div>
        <div>
          <div className="menu-toggle">
            <Hamburger
              easing="ease-in"
              duration={0.8}
              distance="lg"
              toggled={showMenu}
              onToggle={(toggled) => {
                if (toggled) {
                  setShowMenu(true);
                } else {
                  setShowMenu(false);
                }
              }}
            />
          </div>

          {showMenu && (
            <nav className="nav-links">
              <Link
                onClick={() => {
                  window.innerWidth <= 768
                    ? setShowMenu(false)
                    : setShowMenu(true);
                }}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  window.innerWidth <= 768
                    ? setShowMenu(false)
                    : setShowMenu(true);
                }}
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-270}
                duration={500}
              >
                About
              </Link>
              <Link
                onClick={() => {
                  window.innerWidth <= 768
                    ? setShowMenu(false)
                    : setShowMenu(true);
                }}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-235}
                duration={500}
              >
                Projects
              </Link>
              <Link
                onClick={() => {
                  window.innerWidth <= 768
                    ? setShowMenu(false)
                    : setShowMenu(true);
                }}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
export default Header;
