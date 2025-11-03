import React from 'react'

function X_ray_preparation() {
  return (
    <div>
      <div className='container'>
        <div className="prep-section">
            <h2 className="prep-title">How to Prepare for Your X-Ray</h2>

            <div className="prep-cards">
                <div className="prep-card light-orange">
                <h3>Before the X-Ray</h3>
                <ul>
                    <li>You don’t need special preparation for most X-rays.</li>
                    <li>YRemove jewelry or metal objects from the area being scanned.</li>
                    <li>Inform the technician if you are pregnant or might be pregnant.</li>
                </ul>
                </div>
                <div className="prep-card light-blue">
                <h3>During the X-Ray</h3>
                <ul>
                    <li>You’ll be positioned carefully to capture the required angle.</li>
                    <li>The process is quick — usually less than 10 minutes.</li>
                    <li>Our trained technicians ensure comfort and minimal exposure.</li>
                </ul>
                </div>
                <div className="prep-card light-orange">
                <h3>After the X-Ray</h3>
                <ul>
                    <li>You can resume normal activities immediately.</li>
                    <li>Reports are usually ready within 1–3 hours.</li>
                    <li>You can view and download your digital report online.</li>
                </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default X_ray_preparation
