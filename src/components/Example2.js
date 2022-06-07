import Example3 from "./Example3";


function Example2({act, count}) {

  

  return ( 
    <>
     <div className="Example2">

       <Example3 act={act} count={count}/>
    </div>
    </>
    
   );
}

export default Example2;