import React, {Component} from 'react';
import './App.css';
import HeaderAndImage from './Component/HeaderAndImage'
import serviceAndPortfolio from './Component/ServicesAndPortfolio'
import ServiceAndPortfolio from './Component/ServicesAndPortfolio';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
  return (
    <div className="App">
      <HeaderAndImage />
      <ServiceAndPortfolio />
    </div>
  );
}
}

export default App;
