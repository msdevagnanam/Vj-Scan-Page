import React from 'react'

import { BsArrowUpRightCircleFill } from 'react-icons/bs'

const DiagnosticFacilities = () => {
  return (
    <div>
        <div className="container">
            <div className="diagnostic-section">
                <div className="diagnostic-container">
                    <div className="left-diagnostic-section">
                    <h2 className='diagnostic-title'>Our Diagnostic Facilities</h2>
                    <p className='diagnostic-text'>we provide a wide range of advanced diagnostic tests focused on assessing the health and function of your body’s vital organs. Our specialized testing services are designed to deliver accurate, reliable, and timely results — empowering you and your healthcare provider to make informed decisions about your health.</p>

                    <button className="diagnostic-btn">
                         View All Checkups <span className='arrow'><BsArrowUpRightCircleFill size={30}  /></span>
                    </button>
                </div>
                
                <div className="right-diagnostic-section">
                    <div className="diagnostic-grid">
                        <div className="diagnostic-card">
                            <img src="images/icon-onco.png" alt="Onco Diagnostics" />
                            <h4>Onco Diagnostics</h4>
                        </div>
                        <div className="diagnostic-card">
                            <img src="images/icon-clinical.png" alt="Clinical Genetics" />
                            <h4>Clinical Genetics</h4>
                        </div>
                        <div className="diagnostic-card">
                            <img src="images/icon-infectious.png" alt="Infectious Disease" />
                            <h4>Infectious Disease</h4>
                        </div>
                        <div className="diagnostic-card">
                            <img src="images/icon-neuro.png" alt="Neuro Genetics" />
                            <h4>Neuro Genetics</h4>
                        </div>
                        <div className="diagnostic-card">
                            <img src="images/icon-newborn.png" alt="New Born Screening" />
                            <h4>New Born <br /> Screening</h4>
                        </div>
                        <div className="diagnostic-card">
                            <img src="images/icon-prenatal.png" alt="Prenatal Genetic Screening" />
                            <h4>Prenatal Genetic <br /> Screening</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>


        <section className='container'>
            <div className='telescope-container'>
                <div className="telescope-image">
                    <img src="images/Telescope.png" alt="lab" />
                </div>
            </div>
            
        </section>
        
    </div>
  )
}

export default DiagnosticFacilities