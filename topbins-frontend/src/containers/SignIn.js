import React from 'react';
import './Form.css';

const SignIn = () => {

  return (
    <div>
      <h1>Sign In</h1>
      <div className="form-container">
        <img src="" alt="" ></img>
        <form className="form">
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            name="Name"
          />
          <input
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
          />
          <label> <input type="checkbox" name="termsCheckbox" /> I agree to the Terms and Conditions</label>
          <button class="form-field" type="submit"> Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn