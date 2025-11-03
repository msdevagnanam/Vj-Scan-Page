import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";

function Herosection_ultrasonic() {
  return (
    <div>
        <div className="container">
            <div className="ultrasound_section">
                <div className="ultrasound_contant">
                    <div className="ultrasound_left">
                        <h1>Expert 2D & 3D Ultrasound Services for Safe and Trusted Diagnostic Results</h1>
                        <p>Get detailed imaging with our advanced ultrasonography technology. From pregnancy scans to organ evaluations, we provide quick, safe, and reliable results — performed by certified sonographers and radiologists.</p>
                        <div className="left-btn">
                            <button className='ultrasound_scan'>Book Your Ultrasound <FiArrowUpRight size={20} className='icon_ultrasound'/></button>
                            <button className='ultrasound_scan'>Call Us <FaPhoneVolume size={20} id='icon_ultrasound1' className='icon_ultrasound'/></button>
                        </div>
                    </div>
                    <div className="mri_right">
                        <img src="images/Hero_ultrasound.png" alt="CT Scan Hero Section" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection_ultrasonic