import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Mri_info_section() {
  return (
    <div>
        <div className="container">
            <div className="mri-info-section">
                <div className="mri-left">
                    <img
                    src="images/MRI_Info.png"
                    alt="CT Scan"
                    />
                </div>

                <div className="mri-right">
                    <h2>
                    What is an MRI Scan?
                    </h2>

                    <p>
                    An MRI (Magnetic Resonance Imaging) scan uses powerful magnets and radio waves — not X-rays — to produce detailed 3D images of internal organs, soft tissues, and bones.
                    </p>

                    <p>
                    MRI scans are especially useful for diagnosing conditions related to the brain, spine, joints, heart, and abdomen with exceptional clarity.
                    </p>

                    <p>
                    At VJ Scans & Labs, our 1.5 Tesla MRI system ensures crystal-clear images with shorter scan times, advanced safety features, and a comfortable experience for every patient.
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

export default Mri_info_section