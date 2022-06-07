import React, { useState } from "react";

function Example4() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    setItems([...items, input]);
    setInput("");
  }


  return ( 
    <>
      <div>
        <label>
          <input onChange={handleChange}  value={input} />
        </label>

        <button onClick={handleClick}> 
          Add
        </button>


        <ul>
          {items.map(item =>  <><li>{item}</li><button>-</button></>)}

        </ul>
      </div>
    </>
   );
}

export default Example4;