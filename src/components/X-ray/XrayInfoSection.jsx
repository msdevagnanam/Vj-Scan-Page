import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function XrayInfoSection() {
  return (
    <div>
        <div className="container">
            <div className="x-ray-info-section">

                <div className="x-ray-right">
                    <h2>
                    What is an X-Ray?
                    </h2>

                    <p>
                    An X-ray is a quick and painless diagnostic test that uses safe levels of radiation to produce images of the inside of your body  helping doctors examine bones, chest, joints, and internal organs.
                    </p>

                    <p>
                    Our digital X-ray systems deliver crystal-clear images instantly, allowing for faster diagnosis, minimal radiation exposure, and easy report sharing.
                    </p>

                    <button className="x-ray-btn">
                    Book Now <span><BsArrowUpRightCircleFill size={30} className='arrow'  /></span>
                    </button>
                </div>
                <div className="x-ray-left">
                    <img
                    src="images/X_ray_information.png"
                    alt="CT Scan"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default XrayInfoSection
