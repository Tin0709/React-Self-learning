import React, {useState} from "react";

function UpdateAnObject (){

    const [car, setCar] = useState({year:2024,
                                                    make:"Tesla",
                                                    model: "S"})

   function handleYearChange (event) {
        setCar(c =>({...c, year: event.target.value}))
   }

   function handleMakeChange (event) {
        setCar(c =>({...c, make: event.target.value}))
   }

   function handleModelChange (event) {
        setCar(c => ({...c, model: event.target.value}))
   }


   function resetButton (event){

       setCar({
           year: 2024,
           make: "Tesla",
           model: "S"
       });
   }
    return <div className="Update-An-Object">
        <h1>Update An Object</h1>
        <p>Your favorite car is {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
        <button onClick={resetButton}>Reset</button>
    </div>
}

export default UpdateAnObject