import React from 'react'

function CTPreparation() {
  return (
    <div>
      <div className='container'>
        <div className="prep-section">
            <h2 className="prep-title">How to Prepare for Your CT Scan</h2>

            <div className="prep-cards">
                <div className="prep-card light-orange">
                <h3>Before the Scan</h3>
                <ul>
                    <li>Wear comfortable clothing and avoid metal accessories.</li>
                    <li>You may be asked to fast for 3–4 hours (for contrast scans).</li>
                    <li>Inform our team if you're pregnant or allergic to contrast dye.</li>
                </ul>
                </div>
                <div className="prep-card light-blue">
                <h3>During the Scan</h3>
                <ul>
                    <li>You’ll lie on a comfortable bed that moves through the CT scanner.</li>
                    <li>The process is painless and usually takes 10–20 minutes.</li>
                    <li>Our technicians stay with you throughout, ensuring your comfort.</li>
                </ul>
                </div>
                <div className="prep-card light-orange">
                <h3>After the Scan</h3>
                <ul>
                    <li>You can resume normal activities immediately.</li>
                    <li>Reports are available online or at the front desk within hours.</li>
                    <li>Your doctor can review and discuss results promptly.</li>
                </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CTPreparation
