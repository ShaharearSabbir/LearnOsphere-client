import { FAQs } from "../../Contents/Contents";
import FAQItem from "./FAQItem";
import Title from "../SharedComponents/Title";

const FAQ = () => {


  return (
    <section className="flex flex-col justify-center p-4 mx-auto md:p-8">
      <Title
        secondary="How we work"
        title="Frequently Asked"
        utitle="Questions"
        center={true}
      />
      <div className="grid grid-cols-1 gap-4">
        {FAQs.map((faq, index) => (
          <FAQItem index={index} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
