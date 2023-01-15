import React from "react";
import Client from "react-dom/client";
import App from "./App";

const ReactDom = Client.createRoot(document.getElementById("site1"));
ReactDom.render(<App />);
