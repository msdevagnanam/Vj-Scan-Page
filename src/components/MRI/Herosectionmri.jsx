import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";

function Herosectionmri() {
  return (
    <div>
        <div className="container">
            <div className="mri_section">
                <div className="mri_contant">
                    <div className="mri_left">
                        <h1>Advanced 1.5 Tesla MRI Scans for Clear and Accurate Diagnosis</h1>
                        <p>Experience high-definition imaging with our latest 1.5 Tesla MRI system. We ensure maximum comfort, minimal noise, and fast reporting all handled by expert radiologists you can trust.</p>
                        <div className="left-btn">
                            <button className='mri_scan'>Book Your MRI Scan <FiArrowUpRight size={20} className='icon_mri'/></button>
                            <button className='mri_scan'>Call Us <FaPhoneVolume size={20} id='icon_mri1' className='icon_mri'/></button>
                        </div>
                    </div>
                    <div className="mri_right">
                        <img src="images/Hero_MIR.png" alt="CT Scan Hero Section" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosectionmri
