
import React, {useState} from "react";
function ColorPick(){
    const [color, setColor] = useState("#")

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>

        </div>
        <p>Selected color: {color}</p>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>
}

export default ColorPick