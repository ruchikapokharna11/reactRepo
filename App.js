import React from "react";
import ReactDOM from "react-dom/client";

//Funtional Component
const Title_1 = function (){
    return (<h2><i>"Title as Java Script Normal Function"</i></h2>);
}

const Title_2 = () => {
    return (<h2><i>"Title as Arrow Function"</i></h2>);
}
const Heading = () => (
<div id = "container">
    <Title_1/>
    <Title_1></Title_1>
    {Title_2()}
    <h1 className="heading">"Namaste React using Functional Component"</h1>
</div>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)