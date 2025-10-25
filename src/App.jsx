import { useState } from "react";

function myReact() {
  const [count, setCount] = useState(0)
  // setTimeout(() => {alert("This message appears after 10 seconds")}, 10000);
  return <>
  <p>The count is {count}</p>
  <button onClick={() => {setCount(count+1)}}>Increase</button>
  <button onClick={() => {setCount(count-1)}}>Decrease</button>
  <button onClick={() => {setCount(0)}}>Reset</button>
  </>
}

export default myReact