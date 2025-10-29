import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Herosetion() {
  return (
    <div>
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Revolutionizing Cancer Detection  <br />with PET-CT Technology</h1>
            <p>Get the right diagnosis at the right time. Early and accurate insights empower smarter <br /> treatment choices and better results.</p>
            <button className="btn-hero">Know More <span className='arrow'><BsArrowUpRightCircleFill size={30}  /></span> </button>
          </div>
          <div className="patients-card">
            <div className="text-section">
              <h3>5L+</h3>
              <p>Patients tested</p>
            </div>
            <div className="avatars">
              <div className="avatar">
                <img src="images/patient1.png" alt="Patient 1" />
              </div>
              <div className="avatar">
                <img src="images/patient2.png" alt="Patient 2" />
              </div>
              <div className="avatar">
                <img src="images/patient3.png" alt="Patient 3" />
              </div>
              <div className="avatar">
                <img src="images/patient4.png" alt="Patient 4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='container'>
        <div className='home-test-container'>
          <div className='home-test-content'>
            <h2> Stay Stress-Free <br />Get Yourself Tested  at Home</h2>
            <h3 className="sub-heading">At-home Tests</h3>
            <p>We know it’s not always easy to visit a diagnostic centre — especially if you’re unwell,
              elderly, or have mobility issues. That’s why Anderson Diagnostics & Labs brings our testing
              services to you! Our friendly, trained professionals will collect your samples right from
              your doorstep, so you can stay comfortable at home and still get accurate, on-time results
              you can trust.
            </p>
            <button className="read-more-btn">
              Read More <span className='arrow'><BsArrowUpRightCircleFill size={30}  /></span>
            </button>
          </div>
          <div className='home-test-image'>
            <img src="images/lab-img.png" alt="lab-img" />
          </div>
        </div>
      </section>


    </div>
  )
}
