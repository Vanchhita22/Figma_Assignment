import React from 'react';
import '../Asserts/style/footer.css'; 
import logo from '../Asserts/image/logo.PNG';

const App = () => {
  return (
    <div className="App-form">
 
    <img src={logo} alt="Logo" />
  
      <form className="form-row">
        <div className="form-group">
          <label htmlFor="phone">
            <i className="fas fa-phone"></i> Contact nums
          </label>
          <input type="tel" id="phone" name="phone" placeholder="+91 0000000000" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Gmail
          </label>
          <input type="email" id="email" name="email" placeholder="demo@gmail.com" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="address">
            <i className="fas fa-map-marker-alt"></i> Address
          </label>
          <input type="text" id="address" name="address" placeholder="Mumbai, India" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="leaveRequest">
            <i className="fas fa-sticky-note"></i> Leave Request
          </label>
          <input type="text" id="leaveRequest" name="leaveRequest" placeholder="Leave Request" className="form-input" />
        </div>
      </form>

      <p>We work throughtout the world</p>
    </div>
  );
}

export default App;
