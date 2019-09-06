import * as React from "react";
import { hot } from "react-hot-loader";
import { connet } from 'react-redux';
import Home from "./components/screens/Home"
import "./app.css"

const App = () => {
  return (
    <Home/>
  );
};

export default hot(module)(App) ;
