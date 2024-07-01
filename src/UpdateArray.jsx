import React, {useState} from "react";

function UpdateArray (){

    const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";
        setFood(f =>[ ...f,newFood])
    }

    function removeFood (index){
        setFood(food.filter((_,i) => i !== index));
    }

    function resetList (){
        setFood(["Apple", "Banana", "Orange"])
    }

    return <div className="UpdateArray">
        <h2>List of Food</h2>
        <p>(click on the item to renove)</p>
        <ul>
            {food.map((food, index) =>
                <li key={index} onClick={() => (removeFood(index))}>{food}</li>)}
            <input type="text" id="foodInput" placeholder="Enter food Name"/> <br/>
            <button onClick={addFood}>Add</button> <br/>
            <button onClick={resetList}>Reset</button>
        </ul>
    </div>
}

export default UpdateArray