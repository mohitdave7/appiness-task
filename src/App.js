import React, { Component } from 'react';
import  { Provider } from 'react-redux'
import store from './store';
import Route from './routes';
import "antd/dist/antd.css";

class App extends Component {
  componentDidMount(){
    let userDetails={'username':'hruday@gmail.com','password':'hruday123'}
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }
  render() {
    return (
      <Provider store={store}>
        <Route/>
      </Provider>
    );
  }
}

export default App;