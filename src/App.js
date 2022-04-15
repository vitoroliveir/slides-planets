import Home from './components/page/Home'
import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Home/>
    </BrowserRouter> 

    </div>
  );
}

export default App;
