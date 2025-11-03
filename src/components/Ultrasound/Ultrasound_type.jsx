import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Ultrasound_type() {
return (
    <div>
            <div className="">
                    <div className="mri-types-section">
                            <div className="mri-types-left">
                                    <h2>
                                    Diagnostic Ultrasound Scans We Offer
                                    </h2>

                                    <p>
                                    We provide a complete range of diagnostic ultrasound scans using advanced 2D, 3D, and Doppler technology for accurate and safe results.
                                    </p>

                                    <button className="ct-btn">
                                    Book Now <span><BsArrowUpRightCircleFill size={30}  /></span>
                                    </button>
                            </div>
                            <div className="mri-types-right">
                                    {[
                                    { title: "2D Ultrasound", icon: "images/2DUltrasound.png" },
                                    { title: "3D Ultrasound", icon: "images/3DUltrasound.png" },
                                    { title: "Pregnancy Ultrasound", icon: "images/Pregnancy Ultrasound.png" },
                                    { title: "Pelvic Ultrasound", icon: "images/Pelvic Ultrasound.png" },
                                    { title: "Thyroid Ultrasound", icon: "images/Thyroid Ultrasound.png" },
                                    { title: "Breast Ultrasound", icon: "images/Breast Ultrasound.png" },
                                    ].map((item, index) => (
                                    <div className="pct-card" key={item.title || index}>
                                        <div className="ct-card">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <p>{item.title}</p>
                                    </div>
                                    ))}
                            </div>
                    </div>
            </div>
    </div>
)
}

export default Ultrasound_type