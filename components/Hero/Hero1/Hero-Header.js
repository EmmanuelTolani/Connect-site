import Header1 from "../../Header1/Header1";
import Link from "next/link";
export default function Hero(props) {
  console.log(props.color);
  console.log(props.title);
  return (
    <>
      <div className="hero-header">
        <Header1 />
        <div className="container1">
          <div className="hero">
            <div className="hero__title">
              <h3>Creating Connection</h3>
              <h1>Slogan goes right here.</h1>
              <div className="hero__applinks">
                <Link href="/">
                  <a>
                    <img src="../../src/images/android.png" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="../../src/images/applestore.png" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="hero__img">
              <img src="../../src/images/mockup1.png" />
            </div>
          </div>
        </div>
      <div className="hero__powered">
        <div className="container1">
          <h3>Powered By</h3>
          <div className="hero__powered--logo">
            <h1 className="a">lululemon</h1>
            <h1>ALPHALETE</h1>
            <h1 className="b">freshii</h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
