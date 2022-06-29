import './Form.css';
const Register = () => {


  return (
    <div className="form-container">
      <form className="register-form">
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
        <label> <input type="checkbox" name="termsCheckbox"/> I agree to the Terms and Conditions</label>
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;