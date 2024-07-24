import React from 'react';
import '../Asserts/style/SideBySideText.css';

function Sectionmain() {
  return (
    <main className="side-by-side-cont">
      <section className="side-by-side-left">
        <h2>Let's Discuss <br/> Your Project</h2>
        <p>Let's figure out how to create an effective application,<br/>its cost and terms of its development.</p>
      </section>
      <section className="side-by-side-right">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Full name' required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder='+91 0000000000' required />
          </div>
          <div className="form-group">
            <label htmlFor="business-name">Business Name:</label>
            <input type="text" id="business-name" name="business-name" placeholder='ABC techologies PVT LTD' required />
          </div>
          <div className="form-group">
            <label htmlFor="business-email">Business Email:</label>
            <input type="email" id="business-email" name="business-email" placeholder='demoaccount@gmail.com' required />
          </div>
          <div className="form-group">
            <button type="submit">Discuss the project</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Sectionmain;
