import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
/* import { createRoot } from 'react-dom/client'; */
import DataApp from "./components/DataApp";

/* const root = createRoot(document.getElementById('root'));

root.render(
  <DataApp>
    <App />
  </DataApp>  
); */


ReactDOM.render(
    <DataApp>
      <App />
    </DataApp>, 
document.getElementById("root"));
