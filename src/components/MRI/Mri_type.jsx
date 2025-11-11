import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Mri_type() {
  return (
    <div>
        <div className="">
            <div className="mri-types-section">
                <div className="mri-types-right">
                    {[
                    { title: "Brain", icon: "images/Brain.png" },
                    { title: "Chest", icon: "images/Spine.png" },
                    { title: "Cardiac", icon: "images/Cardio.png" },
                    { title: "Whole Body", icon: "images/Limb.png" },
                    { title: "MRCP, Pelvis", icon: "images/Dental.png" },
                    { title: "Spine", icon: "images/Dental.png" },
                    { title: "Spectroscopy", icon: "images/Dental.png" },
                    { title: "Joints", icon: "images/Dental.png" },
                    ].map((item, index) => (
                    <div className="pct-card" key={item.title || index}>
                        <div className="ct-card">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <p>{item.title}</p>
                    </div>
                    ))}
                </div>
                <div className="mri-types-left">
                    <h2>
                    Explore Our MRI Scan Types
                    </h2>

                    <p>
                    Discover our full suite of MRI scan options, each performed using advanced imaging systems to ensure clarity, comfort, and quick results.
                    </p>

                    <p>
                        At our center, you’ll find cutting-edge MRI technology and compassionate care—all aimed at delivering the most accurate results in the shortest time possible.
                    </p>

                    <button className="ct-btn">
                    Book Now <span><BsArrowUpRightCircleFill size={30} className='arrow'  /></span>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Mri_type
