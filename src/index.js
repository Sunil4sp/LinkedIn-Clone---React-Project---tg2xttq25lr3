<<<<<<< HEAD
import React from "react";
/* import ReactDOM from "react-dom"; */
import App from "./components/App";
import { createRoot } from 'react-dom/client';
import DataApp from "./components/DataApp";

const root = createRoot(document.getElementById('root'));

root.render(
  <DataApp>
    <App />
  </DataApp>  
);


/* ReactDOM.render(
    <DataApp>
      <App />
    </DataApp>, 
document.getElementById("root")); */
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> bf76f83fbe40d6361d726c68f6a8852f428b8d64
