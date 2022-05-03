import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero1/Hero-Header";
import Footer from "../components/Footer/Footer";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <MainLayout
      title="Who We Are"
      message="Our mission, the team, and our goals."
    >
      <div className="about">
        <div className="container">
          <div className="about__story">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="about__teams">
            <h1>Our Team</h1>
            <div className="about__team">
              <div className="about__person">
                <div className="about__img">
                  <img src="https://variety.com/wp-content/uploads/2019/12/samuel_l_jackson_v3.png?w=853" />
                </div>
                <h4>John Doe</h4>
                <p>Software Developer</p>
              </div>
              <div className="about__person">
                <div className="about__img">
                  <img src="https://images.ctfassets.net/6jnflt57iyzx/4puYKWJCkmftJpOukfCDuw/7c3bd5cd3d5a0baaff1c109efba15518/Jonathan_Mildenhall.png" />
                </div>
                <h4>Vanessa McDonald</h4>
                <p>Software Developer</p>
              </div>
              <div className="about__person">
                <div className="about__img">
                  <img src="https://st0.dancf.com/static/02/202104271120-cc8c.png?x-oss-process=image/format,webp" />
                </div>
                <h4>Grayson Kelly</h4>
                <p>Software Developer</p>
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
        </div>
      </div>
    </MainLayout>
  );
}
