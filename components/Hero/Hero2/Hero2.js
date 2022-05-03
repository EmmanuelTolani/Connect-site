import Header1 from "../../Header1/Header1";
import Link from "next/link";
export default function Hero2(props) {
  return (
    <div className="hero2-header">
      <Header1 />
      <div className="hero2">
        <div className="hero2__title">
          <h1 className="hero2__header">{props.title}</h1>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
