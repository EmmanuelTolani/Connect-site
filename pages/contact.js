import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero1/Hero-Header";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <MainLayout
      title="Contact Us"
      message="Work with us. Send us a message. We'll get back to you as soon as possible."
    >
      <div className="contact">
        <div className="container">
          <form>
            <div className="contact__container">
              <h3>Please enter your information below.</h3>
              <div className="contact__names">
                <div className="contact__name">
                  <label htmlFor="fname">First name</label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <div className="contact__name">
                  <label htmlFor="lname">Last name</label>
                  <input type="text" id="lname" name="lname" />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="10" cols="30"></textarea>
              <button type="button" onClick="">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
