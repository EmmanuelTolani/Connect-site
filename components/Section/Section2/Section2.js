export default function Section1(props) {
    console.log(props.color)
    console.log(props.title)
    return (
        <>
        <div className="section2">
         <div className="section2__info">
            <h1 style={{
                color: `${props.color}`
            }} >{props.title}</h1>
            <p>{props.children}</p>
            </div>
            <div className="section2__image" style={{
               backgroundImage: `url(${props.bG})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               height: `${props.height}`
            }}></div>
           
        </div>
    </>
    );
  }
  