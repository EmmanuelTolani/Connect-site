import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__l">
          <div className="footer__logo">
            <img src="../../src/images/Connect-NewLogo-12.png" height="250" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="footer__r">
          <ul className="footer__links">
            <li>
              <h5>About</h5>
            </li>
            <li>
              <Link href="/updates">
                <a>Who We Are</a>
              </Link>
            </li>
            <li>
              <Link href="/updates">
                <a>Updates</a>
              </Link>
            </li>
          </ul>
          <ul className="footer__links">
            <li>
              <Link href="/connect">
                <h5>Connect App</h5>
              </Link>
            </li>
            <li>
              <Link href="/connect">
                <a>App Features</a>
              </Link>
            </li>
          </ul>
          <ul className="footer__links">
            <li>
              <Link href="/contact">
                <h5>Contact Us</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__footer">
        <p>2022 Connect App</p>
        <div className="links">
          <Link href="/">
            <a>Terms and Conditions</a>
          </Link>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
