import React, {useState} from "react";

function MyComponent2 (){

    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState(1);

    const [comment, setComment] = useState("");

    const [payment, setPayment] =useState();

    const [shipping, setShipping] = useState("");
    function handleNameChange (event){
        setName(event.target.value)
    }

    function handleQuantityChange (event){
        setQuantity(event.target.value)
    }

    function handleCommentChange (event){
        setComment(event.target.value)
    }

    function handlePaymentChange (event){
        setPayment(event.target.value)
    }

    function handleShippingChange (event){
        setShipping(event.target.value);
    }

    function resetToDefault (){
        setPayment("")
        setName("")
        setComment("")
        setQuantity(1)
        setShipping("")
    }


    return <div className="MyComponent2Wrapper">
       <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Comment here..."></textarea>
        <p>Comments: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="Gift Crad">Gift Card</option>
        </select>
        <p>Payment selected: {payment}</p>

        <label >
            <input type="radio" value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange}/>
            Pick up
        </label>
        <label >
            <input type="radio" value="Delivery"
                   checked={shipping === "Delivery"}
                   onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>

        {/*reset button here*/}
        <div>
            <button onClick={resetToDefault}>Reset</button>
        </div>

    </div>
}

export  default MyComponent2