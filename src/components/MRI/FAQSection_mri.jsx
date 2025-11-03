import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const faqs = [
  {
    question: "Is MRI safe?",
    answer:
      "Yes. MRI uses magnetic waves and radio signals — not radiation. It’s safe for most people.",
  },
  {
    question: "Can I undergo MRI if I have metal implants or pacemakers?",
    answer:
      "Most test results are delivered within 24–48 hours. Some specialized tests may take slightly longer depending on complexity.",
  },
  {
    question: "How long does the MRI scan take?",
    answer:
      "Absolutely. We follow strict data privacy protocols to ensure your medical information is safe, secure, and accessible only to authorized professionals.",
  },
  {
    question:
      "What if I feel claustrophobic?",
    answer:
      "While walk-ins are welcome, we recommend scheduling an appointment in advance to ensure faster service and reduced waiting time.",
  },
];

const FAQSection_mri = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
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
  )
}

export default FAQSection_mri