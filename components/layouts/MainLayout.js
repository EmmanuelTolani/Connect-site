import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
