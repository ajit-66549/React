import { useState } from "react";

function myReact() {
  const [count, setCount] = useState(0)
  // setTimeout(() => {alert("This message appears after 10 seconds")}, 10000);
  const [show, setShow] = useState(false)
  const [color, setColor] = useState("green")
  const [like, setLike] = useState(false)
  const [text, setText] = useState("")
  const [dark, setDark] = useState(false)
  const [emoji, setEmoji] = useState("")

  const theme = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    height: "50vh",
  };


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
    <br />

    <div className="text">
      <p>Your text: {text}</p>
      <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
    </div>
    <br />

    <div className="themed" style={theme}>
      <button onClick={() => {setDark(!dark)}}>Change to {dark ? "Light" : "Dark"} Mode</button>
    </div>
    <br />

    <div className="emoji-selector">
      <p>What's your current mood?</p>
      <button onClick={() => setEmoji("😊")}>Happy</button>
      <button onClick={() => setEmoji("😢")}>Sad</button>
      <button onClick={() => setEmoji("😡")}>Angry</button>
      <p>Here is an emoji that best suits your emotion: {emoji}</p>
    </div>
    <br />

    
  </div>
}



export default myReact;
