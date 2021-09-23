export default function Hero(props) {
    console.log(props.color)
    console.log(props.title)
    return (
      <div className="hero" style={{
          backgroundColor:'rgba(0,0,0,0.2)',
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(0,0,0, 0),
            rgba(0,0,0, 75)
          ),url(${props.bG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center',
          color: `${props.color}`,
          height:`${props.height}`,
          width: "100vw"
      }
      }>
        <h1>{props.title}</h1>
        <p>{props.children}</p>
      </div>
    );
  }
  