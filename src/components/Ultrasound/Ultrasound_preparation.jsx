import React from 'react'

function Ultrasound_preparation() {
  return (
    <div>
        <div className='container'>
            <div className="prep-section">
                <h2 className="prep-title">What to Know Before Your Ultrasound Scan</h2>

                <div className="prep-cards">
                    <div className="prep-card light-orange">
                    <h3>Before the Scan</h3>
                    <ul>
                        <li>No special preparation needed for most scans.</li>
                        <li>You may be asked to drink water and avoid urination before pelvic scans.</li>
                        <li>Wear comfortable clothing and remove any metallic accessories.</li>
                        <li>Bring your doctor’s prescription or previous reports, if available.</li>
                    </ul>
                    </div>
                    <div className="prep-card light-blue">
                    <h3>During the Scan</h3>
                    <ul>
                        <li>You’ll lie comfortably while the radiologist applies a cool gel on the area being scanned.</li>
                        <li>The transducer (probe) moves gently over your skin to capture images.</li>
                        <li>The process is painless and takes 15–30 minutes.</li>
                        <li>For pregnancy scans, you may be asked to hold your breath briefly during imaging.</li>
                    </ul>
                    </div>
                    <div className="prep-card light-orange">
                    <h3>After the Scan</h3>
                    <ul>
                        <li>You can return to normal activities immediately.</li>
                        <li>Reports are ready within 1–2 hours, available both digitally and in print.</li>
                        <li>Your doctor will review the results and discuss the findings with you.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ultrasound_preparation
