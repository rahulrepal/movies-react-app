import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';
import './App.css';
import {Provider} from './context';
class App extends Component {
  render() {
    return (

      <Provider>
      <div className="">
        <Layout/>
      </div>
      </Provider>
    );
  }
}

export default App;
