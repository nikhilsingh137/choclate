import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";
import Style from "./header.module.scss";
import BlackLogo from "../img/Simply_logo_black.avif";
import WhiteLogo from "../img/Simply_logo_white.avif";
import Navbar from "./Navbar";
import StickyBox from "react-sticky-box";
import Overlay from "./Overlay";
import SearchBox from "../component/SearchBox";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("transparent");
  const [overlay, setOverlay] = useState(false);
  const [search, setSearch] = useState(false);
  const [line, setLine] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);

  useEffect(() => {
    const handleLine = () => {
      const scrolled = window.scrollY;
      const lineHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const line = (scrolled / lineHeight) * 100;
      setLine(line);
    };
    window.addEventListener("scroll", handleLine);
    return () => window.removeEventListener("scroll", handleLine);
  }, []);

  useEffect(() => {
    const colourChange = () => {
      const screenScroll = window.scrollY;
      if (screenScroll > 100) {
        setColor("#463126");
      } else {
        setColor("transparent");
      }
    };
    colourChange();
    window.addEventListener("scroll", colourChange);
    return () => window.removeEventListener("scroll", colourChange);
  }, []);
  useEffect(() => {
    dispatch(fetchHeader());
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const handleCross = () => {
    let navbar = document.getElementById("navbar");
    let overlay = document.getElementById("overlay");
    if (navbar && overlay) {
      navbar.style.width = "0px";
      overlay.style.width = "0px";
    }
    document.body.style.overflow = "";
  };

  const handleOpen = () => {
    const navbar = document.getElementById("navbar");
    let overlay = document.getElementById("overlay");
    if (navbar && overlay) {
      navbar.style.width = "300px";
      overlay.style.width = "100%";
    }
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setOverlay(true);
    }, 8000);
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleOverlay = () => {
    setOverlay(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleForm = () => {
    setSearch(true);
    document.body.style.overflow = "hidden";
  };

  const handleSearch = () => {
    setSearch(false);
    document.body.style.overflow = "";
  };
  return (
    <>
      <StickyBox style={{ zIndex: "9" }}>
        <div className={Style.Header}>
          {overlay && <Overlay handleCross={handleOverlay} />}
          {showNavbar && <div className={Style.overlay} id="overlay"></div>}
          {showNavbar && (
            <div className={Style.Navbar} id="navbar">
              <Navbar handleCross={handleCross} />
            </div>
          )}
          <div className={Style.head}>
            <a href="/#">Nyhed! Udforsk årets julekollektion her</a>
          </div>
          <div
            className={`${Style.divide} ${
              color === "#463126" ? Style.change : ""
            }`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <div className={Style.button} onClick={handleOpen}>
              ☰
            </div>
            <div className={Style.logo}>
              <img src={active ? BlackLogo : WhiteLogo} alt="" />
            </div>

            <div className={Style.navbar}>
              <ul>
                {data.headerData &&
                  data.headerData.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href={item.url} key={item.id}>
                          {item.title}
                        </a>
                        {item.id === "1" && (
                          <div className={Style.drop} key={item.id}>
                            <div className={Style.frame}>
                              {item.subMenu &&
                                item.subMenu.map((item) => {
                                  return (
                                    <a href={item.url} key={item.id}>
                                      <span>
                                        <img src={item.img} alt="" />
                                      </span>
                                      <strong>{item.title}</strong>
                                    </a>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                        {item.id === "2" && (
                          <div className={Style.drop} key={item.id}>
                            <div className={Style.frame}>
                              {item.subMenu &&
                                item.subMenu.map((item) => {
                                  return (
                                    <a href={item.url} key={item.id}>
                                      <span>
                                        <img src={item.img} alt="" />
                                      </span>
                                      <strong>{item.title}</strong>
                                    </a>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                        {item.id === "3" && (
                          <div className={Style.drop} key={item.id}>
                            <div className={Style.frame}>
                              {item.subMenu &&
                                item.subMenu.map((item) => {
                                  return (
                                    <a
                                      href={item.url}
                                      style={{ width: "24%" }}
                                      key={item.id}
                                    >
                                      <span>
                                        <img src={item.img} alt="" />
                                      </span>
                                      <strong>{item.title}</strong>
                                    </a>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={Style.icon}>
              <span>
                DK
                <strong>
                  <i className="fa-solid fa-angle-down"></i>
                </strong>
              </span>
              <h2 onClick={handleForm}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </h2>
              <h3>
                <a href="/cart">
                  <i className="fa-solid fa-briefcase"></i>
                </a>
              </h3>
            </div>
            <div
              className={Style.borderLine}
              style={{ width: `${line}%` }}
            ></div>
            {search && <SearchBox handleSearch={handleSearch} />}
          </div>
        </div>
      </StickyBox>
    </>
  );
};

export default Header;
