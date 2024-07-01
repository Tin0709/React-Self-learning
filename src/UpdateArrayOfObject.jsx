import React, {useState} from "react";

function UpdateArrayOfObject (){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function addCar (){
        const newCar = {year: carYear,
                             make: carMake,
                             model: carModel};
        setCars(c =>[...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }

    function removeCar (index){
        setCars(c => c.filter((_,i) => i !== index))
    }

    function yearChange(event){
        setCarYear(event.target.value)
    }

    function makeChange (event){
    setCarMake(event.target.value)
    }

    function modelChange (event){
        setCarModel(event.target.value)

    }

    function recommended (){
        setCarMake("Tesla");
        setCarYear(new Date().getFullYear());
        setCarModel("S");
    }

    function resest (){
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
        setCars([]);
    }

    return <div className="UpdateArrayOfObject">

        <h2>List of Cars</h2>
        <ul>
            {cars.map((car, index) =>
                <li id="list" key={index} onClick={() => removeCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>

        <input type="number" value={carYear} onChange={yearChange}/> <br/>
        <input type="text" value={carMake} onChange={makeChange} placeholder="Enter car's make"/> <br/>
        <input type="text" value={carModel} onChange={modelChange} placeholder="Enter car's models"/> <br/>
        <button onClick={addCar}>Add Car</button>
        <button onClick={recommended}>Recommended</button>
        <button onClick={resest}>Reset</button>
    </div>
}

export default UpdateArrayOfObject