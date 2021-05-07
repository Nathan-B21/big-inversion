import React, {useState} from "react";






//FUNCTIONAL COMPONENTS

const PersonCard = props =>{
    const [ageCount, setAge] = useState(props.age)






    console.log("*****************", props)
    let {firstName, lastName, age, hairColor} = props;
    const ageItem = () =>{
        setAge(ageCount+1);
    }
    return(
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>Age: {ageCount}</p>
            <p>Hair Color:  {hairColor}</p>
            <p><button className="btn-success" onClick={ageItem}>Birthday Button for {firstName}</button></p>
        </div>
    )




}

export default PersonCard;