import Hero from "../Hero/Hero1/Hero-Header";
import Footer from "../Footer/Footer";
export default function MainLayout(props) {
  return (
    <div>
      <Hero/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
