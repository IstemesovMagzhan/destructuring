import Example2 from "./Example2";
import { useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);

   function onClick2(event) {
    setCount(count - 1);
  }
  return ( 
  <div className="Example1">

   <button onClick={onClick2}>-</button>
    <Example2 count = {count} act={() => {
        setCount(count+1);
      }} />
  </div> 
  );
}

export default Example1;