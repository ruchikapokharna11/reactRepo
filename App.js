import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => ReactElement => JS Object => HTMLElement(render)
// const heading = React.createElement("h1", "heading", "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//JSX => React.createElement => ReactElement => JS Object => HTMLElement(render)
//JSX uses parcel which internally uses Babel for converting JSX to react
const jsxHeading = <h1 id="jsxHeading">"Namaste React using JSX"</h1>
root.render(jsxHeading)