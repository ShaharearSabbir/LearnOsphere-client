import React, { useState } from "react";
import { Toast } from "../../Utils/Utilities";
import OnTitleBar from "../../Components/SharedComponents/OnTitleBar";
import Title from "../../Components/SharedComponents/Title";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    Toast.fire({ icon: "success", title: "Successfully send message" });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <OnTitleBar>Contact Us</OnTitleBar>
      <Title
        secondary="Contact Us"
        title="Get In"
        utitle="Touch"
        center={true}
      />
      <div className="container mx-auto overflow-hidden">
        <div>
          <p className=" max-w-xl text-center mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you! Please fill out the form below, or find our direct
            contact information and location.
          </p>

          <div className="flex flex-col md:flex-row gap-12 mt-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-lg transition duration-150 ease-in-out"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-lg transition duration-150 ease-in-out"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-lg transition duration-150 ease-in-out"
                    placeholder="Inquiry about courses"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-lg transition duration-150 ease-in-out"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full md:w-1/2 flex flex-col space-y-8">
              <div className="rounded-lg overflow-hidden border-2 border-blue-200 aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.256221591032!2d144.9630573153169!3d-37.81627997975107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b9d24a490d%3A0x504567846297ce0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678901234567!5m2!1sen!2sau"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Learnosphere Location Map"
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="text-center text-gray-700 p-6 rounded-lg border-2 border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Or Reach Us Directly
                </h2>
                <p className="text-lg flex items-center justify-center mt-2">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email:{" "}
                  <a
                    href="mailto:info@learnosphere.com"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    info@learnosphere.com
                  </a>
                </p>
                <p className="text-lg flex items-center justify-center mt-2">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone:{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-lg flex items-center justify-center mt-2">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Address: 123 Learning Lane, Knowledge City, LC 98765
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
