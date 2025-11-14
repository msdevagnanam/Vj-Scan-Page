// Vjscan.jsx
import React, { useRef, useEffect } from "react";

const Vjscan = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Choose the elements to animate (no markup changes required)
    const title = root.querySelector(".why-title");
    const subtitle = root.querySelector(".why-subtitle");
    const cards = Array.from(root.querySelectorAll(".why-card"));

    // Build ordered reveal list (title -> subtitle -> cards)
    const targets = [];
    if (title) targets.push(title);
    if (subtitle) targets.push(subtitle);
    cards.forEach((c) => targets.push(c));

    // Prepare targets: add base class and set stagger index
    targets.forEach((t, i) => {
      t.classList.add("animate-on-scroll");
      t.style.setProperty("--reveal-idx", String(i));
    });

    // IntersectionObserver config
    const ioOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -8% 0px", // trigger slightly before fully visible
      threshold: 0.12, // ~12% visible
    };

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // add visible class, then unobserve so animation runs only once
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, ioOptions);

    // Observe after layout is stable
    requestAnimationFrame(() => {
      targets.forEach((t) => io.observe(t));
    });

    // Also do an immediate visibility check (handles mid-page loads)
    targets.forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        t.classList.add("is-visible");
        try {
          io.unobserve(t);
        } catch (e) {}
      }
    });

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className="container" ref={rootRef}>
      <section className="why-section">
        <div className="why-container">
          <h2 className="why-title">Why VJ Scans & Labs?</h2>
          <p className="why-subtitle">
            Your health deserves precision and care. At VJ Scans & Labs, our dedicated team of <br /> Radiologists,
            Pathologists, Biochemists, and Microbiologists employs advanced diagnostic <br /> tools to ensure accurate
            results, every time. Driven by empathy and a commitment to your well-being, we are proud to <br /> be a trusted
            partner in your health journey.
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
  );
};

export default Vjscan;
