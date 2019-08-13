import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/form';
import LoginReduxForm from './components/form/LoginReduxForm';

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}


class App extends Component {

  // submit = async values => {
  //   await sleep(500);
  //   window.alert(JSON.stringify(values, null, 2));
  // }

  submit = values => {
    return sleep(500).then(() => {
      window.alert(JSON.stringify(values, null, 2));
    });
  }

  render() {
    return (
      <div className="App container">
        <LoginForm></LoginForm>
        <hr/>
        <LoginReduxForm onSubmit={this.submit}></LoginReduxForm>
      </div>
    );
  }
}

export default App;
