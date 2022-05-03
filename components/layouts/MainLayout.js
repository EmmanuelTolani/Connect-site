import Hero2 from "../Hero/Hero2/Hero2";
import Footer from "../Footer/Footer";
export default function MainLayout(props) {
  return (
    <div>
      <Hero2 title={props.title} message={props.message} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
