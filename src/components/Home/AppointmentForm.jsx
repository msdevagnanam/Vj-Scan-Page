// AppointmentForm.jsx
import React, { useRef, useEffect } from "react";

const AppointmentForm = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Select the specific elements we want to animate (no markup change)
    const bg = root.querySelector(".appointment-bgimg");
    const left = root.querySelector(".appointment-left");
    const title = left?.querySelector("h2");
    const form = left?.querySelector(".appointment-form");
    // We will animate form children (input/select/button) individually for a nice stagger
    const formChildren = form ? Array.from(form.querySelectorAll("input, select, button")) : [];

    // Build ordered targets: background (subtle), title, then each form field, then button
    const targets = [];
    if (bg) targets.push(bg);
    if (title) targets.push(title);
    formChildren.forEach((el) => targets.push(el));

    // Prepare each target: add helper class and stagger index
    targets.forEach((t, i) => {
      t.classList.add("animate-on-scroll");
      t.style.setProperty("--anim-i", String(i));
    });

    // IntersectionObserver config
    const ioOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    };

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // animate once
        }
      });
    }, ioOptions);

    // Observe on next animation frame (stable layout)
    requestAnimationFrame(() => {
      targets.forEach((t) => io.observe(t));
    });

    // Immediate visibility check (handles mid-page loads)
    targets.forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        t.classList.add("is-visible");
        try {
          io.unobserve(t);
        } catch (e) {}
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <div>
      <section className="container" ref={rootRef}>
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
