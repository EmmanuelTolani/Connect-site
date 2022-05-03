import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero1/Hero-Header";
import Footer from "../components/Footer/Footer";
import Link from "next/dist/client/link";
export default function Home() {
  return (
    <MainLayout title="Updates" message="Our mission, the team, and our goals.">
      <div className="updates">
        <div className="container">
          <h1>Our Journey So Far</h1>
          <div className="updates__updates">
            <div className="updates__update">
              <h3>Jul 2022</h3>
              <h1>First Partner</h1>
              <div className="circle"></div>
              <div className="vl"></div>
            </div>
            <div className="updates__update1">
              <h3>Apr 2022</h3>
              <h1>First Development</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incicat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <div className="circle"></div>
              <div className="vl"></div>
            </div>
            <div className="updates__update1">
              <h3>Jun 2021</h3>
              <h1>Team Grows</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incicat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <div className="circle"></div>
              <div className="vl"></div>
            </div>
            <div className="updates__update1">
              <h3>Feb 2021</h3>
              <h1>Connect Ideation</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incicat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
              <div className="circle"></div>
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
