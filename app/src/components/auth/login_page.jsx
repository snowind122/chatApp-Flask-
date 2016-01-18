import React from 'react';
import LoginForm from './login_form.jsx';
import "../../../static/stylesheets/sass/components/_login_page.scss";

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div className="login-page">
        <h1>Welcome to Chatterbox!</h1>
        <h2>Please login to continue.</h2>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
