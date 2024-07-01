
import React, {useState} from "react";
function MyComponent(){
    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0)

    const [no, setNo] = useState(false)

    const updateName = () => {setName("Tin")}

    const updateAge = () => {setAge(age + 1)}

    const toggleYesNo = () => {setNo(!no)}
    return <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>Toggle: {no ? "yes" : "no"}</p>
        <button onClick={toggleYesNo}>Toggle to {no ? "no": "yes"}</button>
    </div>
}

export default MyComponent