import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./router/RouterApp";

function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <RouterApp/>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
