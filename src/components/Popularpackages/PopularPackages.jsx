import React, { useRef } from "react";
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
  const scrollContainer = useRef(null);

  // Looping scroll
  const scroll = (direction) => {
    const container = scrollContainer.current;
    const cardWidth = 340; // Adjust to match .card min-width + gap

    if (direction === "left") {
      if (container.scrollLeft <= 0) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    } else {
      const maxScroll =
        container.scrollWidth - container.clientWidth - cardWidth / 2;
      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="">
      <section className="popular-section">
      <h2 className="section-title">Popular Health Packages</h2>

      <div className="slider-container">
        <div className="cards-wrapper" ref={scrollContainer}>
          {packages.map((pkg, i) => (
            <div className="card" key={i}>
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
              <div>
                  <div className="card-body">
                  <p className="test-count">{pkg.tests}</p>
                  <p className="details">{pkg.details}</p>
                </div>
                <div className="card-footer">
                  <button className="view-btn">View Details</button>
                  <button className="book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered bottom navigation buttons */}
        <div className="slider-nav">
          <button className="nav-btn left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <button className="nav-btn right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
    </div>
    
  );
}
