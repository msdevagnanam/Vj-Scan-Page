import React from "react";

const AppointmentForm = () => {
  return (
    <div>
        <section className="container">
          <div className="appointment-section">
            <div className="appointment-bgimg">
            <div className="appointment-left">
          <h2>
            Get Your <br /> <span>Appointment</span>
          </h2>

          <form className="appointment-form">
            <div className="input-row">
              <input type="text" placeholder="Your Name*" required />
              <input type="email" placeholder="Email ID*" required />
            </div>
            <div className="input-row">
              <input type="tel" placeholder="Phone Number*" required />
              <select required>
                <option value="">Select Package</option>
                <option value="diabetes">Diabetes Care</option>
                <option value="heart">Heart Checkup</option>
                <option value="fullbody">Full Body Checkup</option>
              </select>
            </div>
            <button type="submit" className="book-btn">
              Book Now
            </button>
          </form>
        </div>
          </div>
          </div>
          
        </section>
    </div>
  );
};

export default AppointmentForm;
