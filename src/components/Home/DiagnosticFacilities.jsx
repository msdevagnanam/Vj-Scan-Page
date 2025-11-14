import React, { useRef, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const DiagnosticFacilities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = null; // viewport (vertical scroll)
    const node = sectionRef.current;
    if (!node) return;

    // elements we want to animate
    const leftBlock = node.querySelector(".left-diagnostic-section");
    const cards = Array.from(node.querySelectorAll(".diagnostic-card"));
    const telescope = node.closest("div")?.querySelector(".telescope-image"); // safe grab if in same page

    const targets = [];
    if (leftBlock) targets.push(leftBlock);
    cards.forEach((c) => targets.push(c));
    if (telescope) targets.push(telescope);

    // add base class + stagger index for cards
    targets.forEach((t, i) => {
      t.classList.add("animate-on-scroll");
      // set stagger variable for nicer sequencing (cards will get incremental delay)
      t.style.setProperty("--stagger-index", String(i));
    });

    const obsOptions = {
      root,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // run only once for this target
        }
      });
    }, obsOptions);

    // observe on next frame so layout is stable
    requestAnimationFrame(() => {
      targets.forEach((t) => observer.observe(t));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="diagnostic-section" ref={sectionRef}>
          <div className="diagnostic-container">
            <div className="left-diagnostic-section">
              <h2 className="diagnostic-title">Our Diagnostic Facilities</h2>
              <p className="diagnostic-text">
                we provide a wide range of advanced diagnostic tests focused on assessing the
                health and function of your body’s vital organs. Our specialized testing services are
                designed to deliver accurate, reliable, and timely results — empowering you and your
                healthcare provider to make informed decisions about your health.
              </p>

              <button className="diagnostic-btn">
                View All Checkups{" "}
                <span className="arrow">
                  <BsArrowUpRightCircleFill size={30} />
                </span>
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
                  <h4>
                    New Born <br /> Screening
                  </h4>
                </div>
                <div className="diagnostic-card">
                  <img src="images/icon-prenatal.png" alt="Prenatal Genetic Screening" />
                  <h4>
                    Prenatal Genetic <br /> Screening
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="telescope-container">
          <div className="telescope-image">
            <img src="images/Telescope.png" alt="lab" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticFacilities;
