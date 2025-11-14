// Ourspecialisations.jsx
import React, { useRef, useEffect } from "react";

const Ourspecialisations = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const rootNode = rootRef.current;
    if (!rootNode) return;

    // Targets: big image, title, and each card
    const image = rootNode.querySelector(".specialisation-image");
    const title = rootNode.querySelector(".specialisation-title");
    const cards = Array.from(rootNode.querySelectorAll(".specialisation-card"));

    // Build target list in desired reveal order: image, title, then cards
    const targets = [];
    if (image) targets.push(image);
    if (title) targets.push(title);
    // add each card
    cards.forEach((c) => targets.push(c));

    // Add initial class and set stagger index
    targets.forEach((t, i) => {
      t.classList.add("animate-on-scroll");
      t.style.setProperty("--reveal-index", String(i));
    });

    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    };

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // animate once
        }
      });
    }, observerOptions);

    // Start observing on next frame (stable layout)
    requestAnimationFrame(() => targets.forEach((t) => io.observe(t)));

    return () => io.disconnect();
  }, []);

  return (
    <div className="container flex" ref={rootRef}>
      <section className="specialisation-section">
        <div className="specialisation-container">
          <div className="specialisation-image">
            <img src="images/ctscan.png" alt="PET CT Scan" />
          </div>

          <div className="specialisation-content">
            <h2 className="specialisation-title">Our Specialisations</h2>

            <div className="specialisation-grid">
              <div className="specialisation-card">
                <img src="images/ct-pet.png" alt="PET/CT Scan" />
                <p>PET/CT Scan</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-genetics.png" alt="Genetics" />
                <p>Genetics</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-xray.png" alt="X-ray" />
                <p>X-ray</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-mammo.png" alt="Mammogram" />
                <p>Mammogram</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-mri.png" alt="MRI" />
                <p>MRI</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-pathology.png" alt="Pathology" />
                <p>Pathology</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-lab.png" alt="Laboratory" />
                <p>Laboratory</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-healthcheck.png" alt="Health Check" />
                <p>Health Check</p>
              </div>

              <div className="specialisation-card">
                <img src="images/icon-xray.png" alt="Pathology" />
                <p>Pathology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourspecialisations;
