
import React, {useState} from "react";
import Button from "./Button.jsx";
function Counter(){
    const [count, setCount] = useState(0);

    const adding = () => {
        setCount(count => count + 1);

    }

    const  minus = () => {setCount(count => count -1)}

    const clear = () => (setCount(0))

    return <div className="conuterWrapper">
       <div className="allCountIteams">
           <p> {count}</p>
           <div className="counterButtons">
               <button onClick={adding}>Add</button>

               <button onClick={minus}>minus</button>

               <button onClick={clear}>Clear</button>
           </div>

       </div>

    </div>
}

export default Counter