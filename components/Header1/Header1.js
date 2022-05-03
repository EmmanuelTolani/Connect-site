// import React, { useState } from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function Header1() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleIcon = () => {
    if (isActive) {
      return (
        <>
          <i
            className="fa-solid fa-rectangle-xmark"
            style={{
              color: "red",
              fontSize: "3rem",
            }}
          ></i>
        </>
      );
    } else {
      return (
        <>
          <i className="fa-solid fa-bars"></i>
        </>
      );
    }
  };

  const router = useRouter();
  return (
    <>
      <header className="header1">
        <div className="container">
          <div className="header1__logo">
            <Link href="/">
              <a>
                <img
                  width="160px"
                  src="../../src/images/Connect-NewLogo-14.png"
                />
              </a>
            </Link>
          </div>
          <ul className="header1__collections-nav">
            <li>
              <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/connect">
                <a className={router.pathname == "/connect" ? "active" : ""}>
                  Connect App
                </a>
              </Link>
            </li>
            <li>
              <a>
                About Us <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="header1__collections-nav--dropdown active">
                <li>
                  <Link href="/about">
                    <a className={router.pathname == "/about" ? "active" : ""}>
                      Who We Are
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/updates">
                    <a
                      className={router.pathname == "/updates" ? "active" : ""}
                    >
                      Updates
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">
                <a className={router.pathname == "/contact" ? "active" : ""}>
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
          <div className="mobile" onClick={toggleClass}>
            {toggleIcon()}
          </div>
        </div>
      </header>
      <ul
        className={
          isActive
            ? "header1__collections-nav-mobile show"
            : "header1__collections-nav-mobile"
        }
      >
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/connect">
            <a className={router.pathname == "/connect" ? "active" : ""}>
              Connect App
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>
              Who We Are
            </a>
          </Link>
        </li>
        <li>
          <Link href="/updates">
            <a className={router.pathname == "/updates" ? "active" : ""}>
              Updates
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Contact Us
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
