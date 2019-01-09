import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />,<Router basename={process.env.PUBLIC_URL}></Router>, document.getElementById("root"));
