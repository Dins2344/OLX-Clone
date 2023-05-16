import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./store/FirebaseContext";
import Firebase from "./store/config";
import Context from "./store/FirebaseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <FirebaseContext.Provider value={{ Firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
  
);
