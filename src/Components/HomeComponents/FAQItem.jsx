import React, { useState } from 'react';
import { motion } from 'motion/react'; // Ensure this path is correct for your setup
import { expandCollapse } from '../../animation/animate'; // Ensure this path is correct for your setup

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    e.preventDefault(); // Prevent default <details> behavior
    setIsOpen(!isOpen);
  };

  return (
    <details
      key={index}
      name="faq"
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)} // Keep state in sync with native toggle
      className="border-b border-gray-200 last:border-b-0"
    >
      <summary
        className="py-4 px-4 outline-none cursor-pointer font-semibold text-gray-800 flex justify-between items-center select-none"
        onClick={toggleOpen}
      >
        {faq.question}
        <span className="ml-2 text-xl transform transition-transform duration-300">
          {isOpen ? '▲' : '▼'}
        </span>
      </summary>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={expandCollapse}
        className="px-4 pb-4"
      >
        <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
      </motion.div>
    </details>
  );
};

export default FAQItem;