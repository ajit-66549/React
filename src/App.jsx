import { useState } from "react";

function myReact() {
  const [count, setCount] = useState(0)
  // setTimeout(() => {alert("This message appears after 10 seconds")}, 10000);
  const [show, setShow] = useState(false)
  const [color, setColor] = useState("green")
  const [like, setLike] = useState(false)


  return <div className="main">
    <div className="counter">
      <p>The count is {count}</p>
      <button onClick={() => {setCount(count+1)}}>Increase</button>
      <button onClick={() => {setCount(count-1)}}>Decrease</button>
      <button onClick={() => {setCount(0)}}>Reset</button>
    </div>
    <br />

    <div className="toggleText">
      {show && <p>Hello!!</p>}
      <button onClick={() => {setShow(!show)}}>{show ? "Hide" : "Show"}</button>
    </div>
    <br />

    <div className="bgColor" style={{ backgroundColor: color, height: "50vh" }}>
      <button onClick={() => {setColor("Blue")}}>Blue</button>
      <button onClick={() => {setColor("lightgreen")}}>Light Green</button>
    </div>
    <br />

    <div className="likeToogle">
      <button onClick={() => {setLike(!like)}}>
        {like ? "💖 Liked" : "🤍 Like"}
      </button>
    </div>
  </div>
}



export default myReact;
