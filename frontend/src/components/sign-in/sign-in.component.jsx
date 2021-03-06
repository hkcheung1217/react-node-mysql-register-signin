import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:4000/api/users/signin",
        {
          email,
          password
        },
        { withCreditential: true }
      )
      .then(res => {
        console.log("register res", res);
        alert("User has logged in successfully");
        this.setState({
          email: "",
          password: ""
        });
      })
      .catch(err => {
        console.log("register error", err);
        alert("Incorrect email or passwords. Please try again!");
      });
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <h1>HC-Tech</h1>
          <h2>Sign in</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <button className="submit" type="submit">
            Sign In
          </button>

          <Link className="link" to="/react-node-signup-signin/signup">
            Create an account
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
