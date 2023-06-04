import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { AuthProvider, authContext } from "./context/authContext";
import { FilterProvider } from "./context/filterContext";

// Call make Server
makeServer();

export { authContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
