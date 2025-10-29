import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const packages = [
  {
    title: "Diabetes Care Package",
    oldPrice: "₹1200",
    price: "₹395",
    discount: "66% OFF",
    tests: "25 to 38 Tests",
    details:
      "Glucose (F), Glucose (PP), HbA1c, Lipid Profile, Thyroid Function Test...",
  },
  {
    title: "Thyroid Diagnostic Package",
    oldPrice: "₹980",
    price: "₹349",
    discount: "66% OFF",
    tests: "05 to 15 Tests",
    details:
      "Lipid Profile, Thyroid Profile & Anti Thyroid Antibody (Anti TG/Anti TPO)...",
  },
  {
    title: "Healthy Living Package",
    oldPrice: "₹1200",
    price: "₹395",
    discount: "66% OFF",
    tests: "05 to 15 Tests",
    details:
      "Lipid Profile, Thyroid Profile & Anti Thyroid Antibody (Anti TG/Anti TPO)...",
  },
  {
    title: "Full Body Checkup",
    oldPrice: "₹1500",
    price: "₹499",
    discount: "67% OFF",
    tests: "25 to 40 Tests",
    details:
      "Complete Blood Count, Liver Function Test, Kidney Profile, Lipid Profile...",
  },
  {
    title: "Women Wellness Package",
    oldPrice: "₹1600",
    price: "₹599",
    discount: "65% OFF",
    tests: "20 to 35 Tests",
    details:
      "CBC, Thyroid, Hormone Panel, Vitamin D, Calcium, and other essential tests.",
  },
];

export default function PopularPackages() {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const loopData = [packages[packages.length - 1], ...packages, packages[0]];
  const updateCardWidth = () => {
    requestAnimationFrame(() => {
      const card = containerRef.current?.querySelector(".card");
      if (card) {
        const width = card.getBoundingClientRect().width + 20; // gap
        setCardWidth(width);
      }
    });
  };
  useEffect(() => {
    setTimeout(() => {
      updateCardWidth();
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft = cardWidth;
        }
      }, 100);
    }, 200);

    window.addEventListener("resize", updateCardWidth);
    window.addEventListener("orientationchange", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
      window.removeEventListener("orientationchange", updateCardWidth);
    };
  }, [cardWidth]);
  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container || !cardWidth) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "next") {
      if (container.scrollLeft >= maxScrollLeft - cardWidth) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = 0;

        requestAnimationFrame(() => {
          container.style.scrollBehavior = "smooth";
        });
      }
      container.scrollTo({
        left: container.scrollLeft + cardWidth,
        behavior: "smooth",
      });
    } else {
      if (container.scrollLeft <= 0) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = maxScrollLeft - cardWidth;

        requestAnimationFrame(() => {
          container.style.scrollBehavior = "smooth";
        });
      }

      container.scrollTo({
        left: container.scrollLeft - cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="popular-section">
      <h2 className="section-title">Popular Health Packages</h2>

      <div className="slider-container">
        <div className="cards-wrapper" ref={containerRef}>
          {loopData.map((pkg, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <h4>{pkg.title}</h4>
                <div className="price-section">
                  <div className="op-price">
                    <span className="old-price">{pkg.oldPrice}</span>
                    <span className="price">{pkg.price}</span>
                  </div>
                  <span className="discount">{pkg.discount}</span>
                </div>
              </div>

              <div className="card-body">
                <p className="test-count">{pkg.tests}</p>
                <p className="details">{pkg.details}</p>
              </div>

              <div className="card-footer">
                <button className="view-btn">View Details</button>
                <button className="book-btnc">Book Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-nav">
          <button className="nav-btn left" onClick={() => scroll("prev")}>
            <FaChevronLeft />
          </button>
          <button className="nav-btn right" onClick={() => scroll("next")}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
