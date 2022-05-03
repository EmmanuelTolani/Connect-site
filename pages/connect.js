import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero3/Hero3";
import Footer from "../components/Footer/Footer";
import Link from "next/dist/client/link";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="main-drive1">
        <div className="container">
          <div className="main-drive__title">
            <h1>Not Just Another App</h1>
          </div>
          <div className="main-drive1__img">
            <img src="../../src/images/anotherapp.png" />
          </div>
        </div>
      </div>
      <div className="main-product">
        <div className="main-product__title">
          <h1>Not Just Another App</h1>
        </div>
        <div className="container">
          <div className="main-product__products3">
            <div className="main-product__img3">
              <img src="../../src/images/hand.png" />
            </div>
            <div className="main-product__info">
              <h4>What Drives Us</h4>
              <h1>A feed curated for your goals</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="main-product__products4">
            <div className="main-product__info1">
              <h4>What Drives us</h4>
              <h1>Fitness made for your community</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="main-product__img4">
              <img src="../../src/images/product-img.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-contact">
        <div className="main-contact__title">
          <h3>Join Us</h3>
          <h1>Send Us A Message</h1>
        </div>
        <div className="main-contact__button">
          <Link href="/about">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="wrapper">
        <div class="push"></div>
        <Footer></Footer>
      </div>
    </>
  );
}
