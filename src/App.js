import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouting from './AppRouting';
//import UnityGame from './UnityGame';
import React from "react";
import './App.css';

function App() {

  return (
    document.body.style.background = '#013220',
    
    <div className='App' >
        <AppRouting id = "top" />
    </div>
    
  );
}

export default App;
