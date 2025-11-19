import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";

function Herosection_ct_scan() {
  return (
    <div>
         <div className="container">
            <div className="ct_scan_div">
                <div className="ct_scan_section">
                    <div className="ct_scan_contant">
                        <div className="ct_scan_left animate-hero-left">
                            <h1>Advanced CT Scan Services <br /> for Accurate & Fast Diagnosis</h1>
                            <p>Experience high-precision imaging with the latest multi-slice CT scanners. Our expert radiologists deliver detailed results with minimal waiting time — ensuring accurate diagnosis and better care.</p>
                            <div className="left-btn">
                                <button className='btn_ct_scan btn-cta-primary'>Book Your Scan <FiArrowUpRight size={20} className='icon_ct_scan'/></button>
                                <button className='btn_ct_scan btn-cta-outline'>Call Us <FaPhoneVolume size={20} id='icon_ct_scan1' className='icon_ct_scan'/></button>
                            </div>
                        </div>
                        <div className="ct_scan_right animate-hero-right">
                            <img src="images/Hero_CT_Scan.png" alt="CT Scan Hero Section" />
                        </div>
                    </div>
                </div>
            </div>
            
         </div>
    </div>
  )
}

export default Herosection_ct_scan