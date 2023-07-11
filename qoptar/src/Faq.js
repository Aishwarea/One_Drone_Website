// src/FAQ.js

import React from "react";

const Faq = () => {
  const faqData = [
    {
      question: "How beginner friendly are your drones?",
      answer: "Our drones are designed for all skill levels, with intuitive controls and features that make flying safe and enjoyable for beginners as well as experts.",
    },
    {
      question: "Can I use your drones for commercial purposes?",
      answer: "Absolutely! Our quadcopters and FPV drones are suited for a variety of commercial applications, from videography to inspections.",
    },
    {
      question: "How beginner friendly are your drones?",
      answer: "Our drones are designed for all skill levels, with intuitive controls and features that make flying safe and enjoyable for beginners as well as experts.",
    },
    {
        question: "How beginner friendly are your drones?",
        answer: "Our drones are designed for all skill levels, with intuitive controls and features that make flying safe and enjoyable for beginners as well as experts.",
    }
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
