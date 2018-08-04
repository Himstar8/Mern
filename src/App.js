import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Form />
      </div>
       
      
    );
  }
}

export default App;
