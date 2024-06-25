import React from "react";
import '../stylesheets/test.css';

const Test = (props) => {
    return (
        <div className="imageContainer">
            <img className="imageTest"
            src={require(`../assets/test-${props.image}.webp`)}
            alt="Foto de brennan"/>
            <div className="textContainer">
              <p className="testName">{props.name} on {props.place}</p>
              <p className="testCharge">{props.charge} for {props.company}</p>
              <p className="testText">"{props.testament}"</p>
            </div>
        </div>
    )
}
export default Test;