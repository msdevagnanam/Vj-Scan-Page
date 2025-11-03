import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Ultrasound_info_section() {
  return (
    <div>
        <div className="container">
            <div className="ultrasound-info-section">
                <div className="ultrasound-left">
                    <img
                    src="images/Ultrasound_Info.png"
                    alt="CT Scan"
                    />
                </div>

                <div className="ultrasound-right">
                    <h2>
                    How Ultrasonography Works?
                    </h2>

                    <p>
                    Ultrasonography (Ultrasound) is a non-invasive, radiation-free imaging technique that uses high-frequency sound waves to capture real-time images of internal organs, tissues, and developing babies.
                    </p>

                    <p>
                    It helps doctors diagnose a wide range of conditions related to the abdomen, pelvis, thyroid, heart, and pregnancy safely and painlessly.
                    </p>

                    <p>
                    At VJ Scans & Labs, our 2D, 3D, and Doppler ultrasound systems deliver crystal-clear images for accurate evaluation and confident diagnosis.
                    </p>

                    <button className="ct-btn">
                    Book Now <span><BsArrowUpRightCircleFill size={30}  /></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ultrasound_info_section
