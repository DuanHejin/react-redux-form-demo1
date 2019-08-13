import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  state = {
    name: '',
    password: ''
  }

  onChangeHandle = (event) => {
    const {
      target: {
        name,
        value
      }
    } = event;
    this.setState({[name]: value});
  }

  onResetHandle = () => {
    this.setState({name: '', password: ''});
  }

  onSubmitHandle = () => {
    const {name, password} = this.state;
    window.alert(`
    ----    clickced submit button    ----\n
    ----    name is ${name}           ----\n
    ----    password is ${password}   ----
    `);
  }

  render() {
    const {name, password} = this.state;
    return (
      <form className="form form-horizontal">
        <div className="form-group">
          <label className="control-label col-md-3">Name</label>
          <div className="col-md-9">
            <input className="form-control" type="text" name="name" value={name} onChange={this.onChangeHandle}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-3">Password</label>
          <div className="col-md-9">
            <input className="form-control" type="password" name="password" value={password} onChange={this.onChangeHandle}/>
          </div>
        </div>
        <div className="form-group text-center">
          <button type="button" className="btn btn-default" onClick={this.onResetHandle}>Reset</button>
          <button type="button" className="btn btn-primary" onClick={this.onSubmitHandle}>Submit</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;