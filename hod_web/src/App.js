import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'


import React from 'react';

import Leyout from './Componet/layout';

class App extends React.Component {

  componentDidMount(){
    //document.title = "Hod"
  }

  render(){
    return(
      <div className="App">
       <Leyout />
    </div>
    );
  }
  
}

export default App;
