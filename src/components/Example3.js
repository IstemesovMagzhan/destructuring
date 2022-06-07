import { useState } from "react";


function Example3({act, count}) {
  const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [result, setResult] = useState(0);
	const [value, setValue] = useState('');
  

  
	
	function handleChange2(event) {
		setValue2(event.target.value);
	}
  function handleChange1(event) {
		setValue1(event.target.value);
	}
	
	function handleClick() {
		setResult(Number(value1) + Number(value2));
	}

 
  return (
    <>
      <div className="Example3">
        <button onClick={act}>+</button>
        <div>{count}</div>    


        
        


        <input value={value1} onChange={handleChange1} 
			/> 
	    	<input value={value2} onChange={handleChange2} 
			/> 
		
	     	<button onClick={handleClick}>btn</button>
	    	<p>result: {result}</p>

        <select value={value} onChange={(event)=> setValue(event.target.value)}> 
		    	<option value="1">text1</option>
			    <option value="2">text2</option>
			    <option value="3">text3</option>
		     </select>
		        <p>
	        		ваш выбор: {value}
	        	</p>
      </div>
    </>

  );
}

export default Example3;