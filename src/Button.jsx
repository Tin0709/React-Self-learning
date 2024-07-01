function Button (){

    let i =0;
    const handleClick = (name) => {
        if(i < 8){
            i++;
            let AddS = true;
            if (i>1){
                AddS = true;
            }else {
                AddS =false
            }
            console.log(`${name}, you clicked me ${i} time${AddS ? "s":""}`);
        } else{
            console.log(`${name} clicked me more than ${i} times`);
        }
    }

    const handleClick2 = (e) => e.target.textContent = "OUCH!";


    return <div className="buttonWrapper">
        <button onClick={() => handleClick("Tin")} onDoubleClick={(e) => handleClick2 (e)} className="button">Click me</button>

    </div>
}

export default Button