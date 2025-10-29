import React from 'react'

const Vjscan = () => {
  return (
    <div className='container'>
      <section className="why-section">
            <div className="why-container">
            
                <h2 className="why-title">Why VJ Scans & Labs?</h2>
                <p className="why-subtitle">
                Your health deserves precision and care. At VJ Scans & Labs, our dedicated team of <br /> Radiologists, Pathologists, Biochemists, and Microbiologists employs advanced diagnostic <br /> tools to ensure accurate results, every time. Driven by empathy and a commitment to your well-being, we are proud to <br /> be a trusted partner in your health journey.
                </p>


                <div className="why-grid">
            
                <div className="why-card text-card">
                    <h3>Available Across<br />Multiple Locations</h3>
                </div>

            
                <div className="why-card image-card tall">
                    <img src="images/Vjmember.png" alt="Expert Team" />
                    <div className="overlay"></div>
                    <h3>Fully Trained<br />Expert Team</h3>
                </div>

                <div className="why-card image-card">
                    <img src="images/Vjlab.png" alt="Health Insights" />
                    <div className="overlay"></div>
                    <h3>In Depth<br />Health Insights</h3>
                </div>


                <div className="why-card image-card">
                    <img src="images/Vjscan.png" alt="Advanced Diagnostic" />
                    <div className="overlay"></div>
                    <h3>Advanced Diagnostic<br />Technology</h3>
                </div>


                <div className="why-card text-card">
                    <h3>Unmatched<br />Customer Service</h3>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Vjscan
