import React from 'react'

function Mri_preparation() {
  return (
    <div>
        <div className='container'>
            <div className="prep-section">
                <h2 className="prep-title">What to Know Before Your MRI</h2>

                <div className="prep-cards">
                    <div className="prep-card light-orange">
                    <h3>Before the Scan</h3>
                    <ul>
                        <li>Remove all metal objects, jewelry, or electronic items.</li>
                        <li>Inform our staff if you have pacemakers, implants, or metallic prosthetics.</li>
                        <li>You may need to fast for 3–4 hours if a contrast MRI is advised.</li>
                        <li>Wear comfortable, loose-fitting clothes (gown provided if required).</li>
                    </ul>
                    </div>
                    <div className="prep-card light-blue">
                    <h3>During the Scan</h3>
                    <ul>
                        <li>You’ll lie still on the MRI table that moves into the scanner.</li>
                        <li>The procedure is completely painless and lasts about 20–45 minutes, depending on the body part.</li>
                        <li>Our technicians communicate with you via intercom throughout the process.</li>
                        <li>Earplugs or headphones are provided to minimize noise.</li>
                    </ul>
                    </div>
                    <div className="prep-card light-orange">
                    <h3>After the Scan</h3>
                    <ul>
                        <li>You can resume normal activities immediately.</li>
                        <li>Reports are available within 6–12 hours, both online and offline.</li>
                        <li>Your doctor will interpret the results for further treatment if needed.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mri_preparation