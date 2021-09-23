// import React, { useState } from "react";
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link href="/">
            <a>Connect</a>
            </Link>
          </div>
          <ul className="header__collections-nav">
            <li>
              <Link href="/">
              <a>
                Home
              </a>
              </Link>
              </li>
              <li>
              <Link href="/">
              <a>
                Join Beta
              </a>
              </Link>
              </li>
              <li>
              <Link href="/">
              <a>
                About
              </a>
              </Link>
              </li>
          </ul>
          <div className="header__button">
            <button>
                Join Beta
            </button>
          </div>
          </div>
        </header>
    </>
  );
}
