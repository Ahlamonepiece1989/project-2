import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Product from './Components/product.js';




class App extends React.Component {
  constructor(props) {
    super(props);

   
  }

  render() {
    console.log(this.state);

    return (
    	
    <div className="App">
      
      <NavbarComp/>

    </div>
  );
}
}

export default App;
