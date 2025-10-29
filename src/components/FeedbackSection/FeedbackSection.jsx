import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight ,FaStar } from "react-icons/fa";

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

  const scroll = (direction) => {
    const scrollAmount = 350;
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="feedback-section">
      <div className="feedback-left">
        <h2>Our Patients Feedback</h2>
        <p>
          These are some customer testimonials who are satisfied with the place
          & service we have provided
        </p>

        <div className="arrow-buttons">
          <button className="left" onClick={() => scroll("left")}>
             <FaChevronLeft />
          </button>
          <button className="right" onClick={() => scroll("right")}>
             <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="feedback-slider" ref={sliderRef}>
        {testimonials.map((item) => (
          <div key={item.id} className="feedback-card">
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
    </section>
  );
}
