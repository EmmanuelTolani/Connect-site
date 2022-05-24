import Hero from "../Hero/Hero3/Hero3"
import Footer from "../Footer/Footer";
export default function AlternateLayout2(props) {
  return (
    <div>
      <Hero/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
