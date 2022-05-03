import Header1 from "../../Header1/Header1";
import Link from "next/link";
export default function Hero(props) {
  console.log(props.color);
  console.log(props.title);
  return (
    <>
      <div className="hero-header1">
        <Header1 />
        <div className="container">
          <div className="hero1">
            <div className="hero1__title">
              <h1>Community</h1>
              <div className="hero1__img">
                <img src="../../src/images/mockup1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero1__powered">
        <div className="container">
          <h3>
            Discover connection like never before. Connect: a tool made for
            bringing communities together and promoting a healthier lifestyle.
          </h3>
        </div>
      </div>
    </>
  );
}
