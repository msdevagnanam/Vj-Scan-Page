import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Bimosaurus",
    image: "images/Avatar.png",
    feedback:
      "The coordinates were so kind and helpful in guiding us to the right test. Thank you so much for the great service. I would like to comeback here for our future services and would definitely spread a word across my surroundings.",
  },
  {
    id: 2,
    name: "Bimosaurus",
    image: "images/Avatar.png",
    feedback:
      "The coordinates were so kind and helpful in guiding us to the right test. Thank you so much for the great service. I would like to comeback here for our future services and would definitely spread a word across my surroundings.",
  },
  {
    id: 3,
    name: "Bimosaurus",
    image: "images/Avatar.png",
    feedback:
      "The coordinates were so kind and helpful in guiding us to the right test. Thank you so much for the great service. I would like to comeback here for our future services and would definitely spread a word across my surroundings.",
  },
  {
    id: 4,
    name: "Bimosaurus",
    image: "images/Avatar.png",
    feedback:
      "The coordinates were so kind and helpful in guiding us to the right test. Thank you so much for the great service. I would like to comeback here for our future services and would definitely spread a word across my surroundings.",
  },
];

export default function FeedbackSection() {
  const sliderRef = useRef(null);
  const rootRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const loopData = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const updateCardWidth = () => {
    const firstCard = sliderRef.current?.querySelector(".feedback-card");
    if (!firstCard) return;

    const width = firstCard.offsetWidth + 20;
    setCardWidth(width);
    // keep existing centering behaviour
    sliderRef.current.style.scrollBehavior = "auto";
    sliderRef.current.scrollLeft = width;
    sliderRef.current.style.scrollBehavior = "smooth";
  };

  useEffect(() => {
    setTimeout(updateCardWidth, 100);

    window.addEventListener("resize", updateCardWidth);
    window.addEventListener("orientationchange", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
      window.removeEventListener("orientationchange", updateCardWidth);
    };
  }, []);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider || cardWidth === 0) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (direction === "right") {
      if (slider.scrollLeft >= maxScroll - cardWidth) {
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = 0;
        slider.style.scrollBehavior = "smooth";
      }
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else {
      if (slider.scrollLeft <= 0) {
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = maxScroll - cardWidth;
        slider.style.scrollBehavior = "smooth";
      }
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  /* ----------------- ANIMATION: scroll-trigger (runs once) ----------------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Targets: left title, subtitle, and each feedback card
    const title = root.querySelector(".feedback-left h2");
    const subtitle = root.querySelector(".feedback-left p");
    const cards = Array.from(root.querySelectorAll(".feedback-card"));

    const targets = [];
    if (title) targets.push(title);
    if (subtitle) targets.push(subtitle);
    cards.forEach((c) => targets.push(c));

    // prepare classes + stagger index
    targets.forEach((t, i) => {
      t.classList.add("animate-on-scroll");
      t.style.setProperty("--reveal-index", String(i));
    });

    const ioOptions = {
      root: null, // viewport
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    };

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // add visible class and unobserve so it runs only once
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, ioOptions);

    // observe on next frame so layout is stable
    requestAnimationFrame(() => {
      targets.forEach((t) => io.observe(t));
    });

    // immediate check for mid-page loads
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
    <section className="feedback-section" ref={rootRef}>
      <div className="feedback-left">
        <h2>Our Patients Feedback</h2>
        <p>These are some customer testimonials...</p>
        <div className="arrow-buttons desktop-arrows">
          <button className="left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <button className="right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>
        <div className="slider-arrows-mobile">
          <button className="left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <button className="right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="feedback-slider" ref={sliderRef}>
        {loopData.map((item, i) => (
          <div key={i} className="feedback-card">
            <div className="feedback-user">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
            </div>

            <hr />
            <br />

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p>{item.feedback}</p>
          </div>
        ))}
      </div>

      <style>
        {`
/* Desktop */
.feedback-card {
  min-width: 350px;
  max-width: 350px;
  flex-shrink: 0;
}
  .slider-arrows-mobile{
  display:none;
  }

  /* Tablet */
@media (max-width: 900px) {
  .feedback-card {
    min-width: 300px;
    max-width: 300px;
  }
}

/* ✅ Mobile — EXACTLY ONE CARD, NO UNEVEN SCROLL */
@media (max-width: 600px) {
  .feedback-card {
    min-width: 100%;
    max-width: 100%;
  }
}

/* ✅ Mobile: Move arrows to bottom center */
@media (max-width: 600px) {

  .arrow-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
    position: relative;
  }

  .feedback-left {
    text-align: center; /* optional */
  }

  /* Hide the arrows beside the title */
  .feedback-left .arrow-buttons {
    display: none;
  }

  /* Show arrows under slider */
  .slider-arrows-mobile {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }
    .feedback-slider{
    gap:18px;
    }
}
    @media (max-width: 600px) {
  .slider-arrows-mobile {
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-top: 20px;
  }

  .slider-arrows-mobile button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #0a4fa1;     /* your theme blue */
    cursor: pointer;
    transition: 0.3s ease;
  }

  .slider-arrows-mobile button:active {
    transform: scale(0.9);
    background: #e8f0ff;
  }
}

` }
      </style>
    </section>
  );
}
