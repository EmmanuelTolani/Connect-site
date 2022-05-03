import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero1/Hero-Header";
import Footer from "../components/Footer/Footer";
import Link from "next/dist/client/link";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="main-drive">
        <div className="container">
          <div className="main-drive__title">
            <h3>What Drives Us</h3>
            <h1>What We Look for in Success</h1>
          </div>
          <div className="main-drive__points">
            <div className="main-drive__point">
              <div className="main-drive__icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h4>Ideas Worth Exploring</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="main-drive__point">
              <div className="main-drive__icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <h4>Human Connection</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="main-drive__point">
              <div className="main-drive__icon">
                <i class="fa-solid fa-star"></i>
              </div>
              <h4>The Best of the best</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="main-drive__button">
            <Link href="/about">
              <button>Learn more about us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main-product">
        <div className="main-product__title">
          <h3>The Product</h3>
          <h1>Connect App</h1>
        </div>
        <div className="container">
          <div className="main-product__products">
            <div className="main-product__img">
              <img src="../../src/images/Mockup-2.png" />
            </div>
            <div className="main-product__info">
              <h4>Get Informed</h4>
              <h1>Share Your Experiences</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="main-product__button">
                <Link href="/connect">
                  <button>Find out more</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="main-product__products1">
            <div className="main-product__info1">
              <h4>Get Informed</h4>
              <h1>Share Your Experiences</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="main-product__button1">
                <Link href="/connect">
                  <button>Find out more</button>
                </Link>
              </div>
            </div>
            <div className="main-product__img1">
              <img src="../../src/images/Mockup-3.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-updates">
        <div className="container">
          <div className="main-updates__title">
            <h3>Get Informed</h3>
            <h1>Our Updates</h1>
          </div>
        </div>
        <div className="main-updates__container">
          <div className="main-updates__left">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="main-updates__update">
            <h4>Feb 2021</h4>
            <h1>Connect Ideation</h1>
            <div className="circle"></div>
          </div>
          <div className="main-updates__update">
            <h4>Jun 2021</h4>
            <h1>Team Grows</h1>
            <div className="circle"></div>
          </div>
          <div className="main-updates__update1">
            <h4>Apr 2022</h4>
            <h1>First Development</h1>
            <div className="circle"></div>
          </div>
          <div className="main-updates__right">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="main-updates__button">
          <Link href="/about">
            <button>Find out more</button>
          </Link>
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
