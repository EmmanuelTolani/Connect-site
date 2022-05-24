import Hero from "../Hero/Hero1/Hero-Header";
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
