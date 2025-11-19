// Footer.jsx
import React, { useRef, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // choose the elements to animate (no markup change)
    const left = root.querySelector(".footer-left");
    const menu = root.querySelector(".footer-menu");
    const contact = root.querySelector(".footer-contact");
    const bottom = root.querySelector(".footer-bottom");

    const targets = [left, menu, contact, bottom].filter(Boolean);

    // prepare classes and stagger index
    targets.forEach((t, i) => {
      t.classList.add("animate-on-scroll");
      t.style.setProperty("--anim-idx", String(i));
    });

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // only once
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    // observe on next frame so layout is stable
    requestAnimationFrame(() => {
      targets.forEach((t) => io.observe(t));
    });

    // immediate visibility check for mid-page loads
    targets.forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        t.classList.add("is-visible");
        try {
          io.unobserve(t);
        } catch (e) {}
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="container" ref={rootRef}>
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-left footer-anim">
            <div className="footer-logo">
              <img src="images/Footer-logo.png" alt="" />
            </div>
            <div>
              <p>Leading medical diagnostics provider offering advanced diagnostic services.</p>
            </div>
            <div className="socials">
              {/* <h4>Follow Us:</h4> */}
              <div className="social-icons">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-menu footer-anim">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Specialities</a>
              </li>
              <li>
                <a href="#">Scans</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Our Branches</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact footer-anim">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">GSTIN</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
            </ul>
          </div>
        </div>

      <hr />
        <div className="footer-bottom">
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <p>© 2021 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
