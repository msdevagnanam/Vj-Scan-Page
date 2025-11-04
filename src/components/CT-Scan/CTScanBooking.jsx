import React from 'react'

function CTScanBooking() {
  return (
    <div>
        <div className="container">
            <div className="booking-section">
                <div className="booking-left">
                    <h2>Book Your CT Scan</h2>

                    <form className="booking-form">
                    <div className="form-row">
                        <input type="text" placeholder="Your Name*" />
                        <input type="email" placeholder="Email ID*" />
                    </div>

                    <div className="form-row">
                        <input type="text" placeholder="Phone Number*" />
                        <select>
                        <option>Type Of Scan</option>
                        <option>Brain CT</option>
                        <option>Chest CT</option>
                        <option>Abdominal CT</option>
                        </select>
                    </div>

                    <div className="form-row">
{/* Form field */}
<div className="date-picker-wrapper">
  <input id="appointment-date" type="date" className="date-input" />
  <button
    type="button"
    className="calendar-button"
    onClick={() => {
      const el = document.getElementById('appointment-date');
      // Open the native picker when supported
      if (el?.showPicker) el.showPicker();
      else el?.focus();
    }}
    aria-label="Open date picker"
  >
    {/* You can replace with any icon component */}
    📅
  </button>
</div>

                        <select>
                        <option>Time Slot*</option>
                        <option>09:00 AM</option>
                        <option>12:00 PM</option>
                        <option>03:00 PM</option>
                        </select>
                    </div>

                    <button className="book-btn">Book Now</button>
                    </form>
                </div>
                <div className="booking-right">
                    <img
                    src="images/CTScanBooking.png"
                    alt="CT Scan"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTScanBooking