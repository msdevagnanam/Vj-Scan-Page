import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function CTInfoSection() {
  return (
    <div>
        <div className="container">
            <div className="ct-info-section">
                <div className="ct-left">
                    <img
                    src="images/CT_Scan_information.png"
                    alt="CT Scan"
                    />
                </div>

                <div className="ct-right">
                    <h2>
                    What exactly happens in a <br /> <span>CT scan?</span>
                    </h2>

                    <p>
                    A CT (Computed Tomography) Scan is a painless imaging test that uses
                    advanced X-ray technology to create detailed pictures of internal
                    organs, bones, and tissues. It helps doctors detect injuries,
                    infections, and other health conditions with greater accuracy than
                    traditional X-rays.
                    </p>

                    <p>
                    Our state-of-the-art CT machines capture precise images quickly and
                    safely making your experience comfortable and stress-free.
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

export default CTInfoSection
