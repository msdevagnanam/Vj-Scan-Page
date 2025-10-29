import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";


const faqs = [
  {
    question: "How reliable is it to collect blood samples for diagnostic tests?",
    answer:
      "Our home diagnostic services are completely reliable since we follow all strict protocols and regulations. You can be confident that our lab professionals will preserve the integrity of your sample so that the test results will be accurate. Furthermore, all our lab professionals are skilled in using safe and error-free methods to draw blood samples. With Anderson, you are in safe hands.",
  },
  {
    question: "How long will it take to receive my test results?",
    answer:
      "Most test results are delivered within 24–48 hours. Some specialized tests may take slightly longer depending on complexity.",
  },
  {
    question: "Will my medical information be kept confidential?",
    answer:
      "Absolutely. We follow strict data privacy protocols to ensure your medical information is safe, secure, and accessible only to authorized professionals.",
  },
  {
    question:
      "Do I need to schedule an appointment, or can I get tested on the go?",
    answer:
      "While walk-ins are welcome, we recommend scheduling an appointment in advance to ensure faster service and reduced waiting time.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
            <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{faq.question}</h4>
                <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>

  );
};

export default FAQSection;
