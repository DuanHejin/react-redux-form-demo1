import React from 'react';
import {Field, reduxForm} from 'redux-form';

let LoginReduxForm = props => {
  const {handleSubmit, reset, submitting} = props;
  console.log(` is submitting: ${submitting}`);
  return (
    <form onSubmit={handleSubmit} className="form form-horizontal">
      <div className="form-group">
        <label className="control-label col-md-3">Name</label>
        <div className="col-md-9">
          <Field className="form-control" name="name" component="input" type="text"></Field>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-md-3">Password</label>
        <div className="col-md-9">
          <Field className="form-control" name="password" component="input" type="password"></Field>
        </div>
      </div>
      <div className="form-group text-center">
        <button type="button" className="btn btn-default" onClick={reset}>Reset</button>
        <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
}

LoginReduxForm = reduxForm({
  form: 'login'
})(LoginReduxForm);

export default LoginReduxForm;