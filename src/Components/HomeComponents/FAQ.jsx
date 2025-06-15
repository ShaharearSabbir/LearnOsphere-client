import React from "react";
import { underline } from "../../animation/animate";
import { motion } from "motion/react";
import underlineImage from "../../assets/line-2-category-2.svg";
import { FAQs } from "../../Contents/Contents";

const FAQ = () => {
  return (
    <section className="dark:text-gray-800">
      <div className="flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="text-center">
          <h4 className="secondary-title">How it works</h4>
          <h2 className="primary-title">
            Frequently Asked{" "}
            <div className="primary-title-second">
              <span>Questions</span>
              <motion.img
                variants={underline()}
                initial={`initial`}
                whileInView={`animate`}
                className="absolute -bottom-1 right-0 -z-10"
                src={underlineImage}
                alt=""
              />
            </div>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10">
          {FAQs.map((faq, index) => (
            <details key={index} name="faq">
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {faq.question}
              </summary>
              <div className="px-4 pb-4">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
