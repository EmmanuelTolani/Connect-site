export default function Section1(props) {
    console.log(props.color)
    console.log(props.title)
    return (
        <>
        <div className="section1">
            <div className="section1__image" style={{
                backgroundImage: `url(${props.bG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: `${props.height}`,
            }}></div>
            <div className="section1__info">
            <h1 style={{
                color: `${props.color}`
            }}>{props.title}</h1>
            <p>{props.children}</p>
            </div>
        </div>
    </>
    );
  }
  