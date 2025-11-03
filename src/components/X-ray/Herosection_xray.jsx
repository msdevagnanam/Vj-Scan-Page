import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";

function Herosection_xray() {
  return (
    <div>
        <div className="container">
            <div className="x_ray_section">
                <div className="x_ray_contant">
                    <div className="x_ray_left">
                        <h1>High-Quality Digital X-Ray <br />Services for Fast and Clear Results</h1>
                        <p>At VJ Scans & Labs, we provide precise and safe X-ray imaging using the latest digital radiography technology. Get accurate results quickly, with expert radiologists available to interpret your scans.</p>
                        <div className="left-btn">
                            <button className='x_ray_scan'>Book Your X-Ray <FiArrowUpRight size={20} className='icon_x_ray'/></button>
                            <button className='x_ray_scan'>Call Us <FaPhoneVolume size={20} id='icon_x_ray1' className='icon_x_ray'/></button>
                        </div>
                    </div>
                    <div className="x_ray_right">
                        <img src="images/X_ray_Hero.png" alt="CT Scan Hero Section" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection_xray