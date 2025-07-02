import React from "react";
import usePageTop from "../../Hooks/usePageTop";
import OnTitleBar from "../../Components/SharedComponents/OnTitleBar";
import Title from "../../Components/SharedComponents/Title";

const About = () => {
  usePageTop();
  return (
    <div className="min-h-screen container mx-auto">
      <OnTitleBar>About</OnTitleBar>
      <div>
        <Title
          secondary="About Us"
          title="Know More"
          utitle="About Us"
          center={true}
        ></Title>

        <p className="mt-4 text-justify">
          Welcome to Learnosphere, your dedicated partner in unlocking a world
          of knowledge and skill. In today's fast-paced world, continuous
          learning isn't just an advantage—it's essential. We believe that
          everyone, everywhere, deserves access to high-quality education that
          empowers them to achieve their personal and professional goals.
        </p>

        <p className="mt-4 text-justify">
          At Learnosphere, we're building more than just a platform; we're
          cultivating a vibrant community where curiosity thrives and potential
          is realized. Whether you're looking to master a new programming
          language, delve into creative arts, enhance your business acumen, or
          simply explore a new passion, we offer a diverse range of courses
          designed with you in mind.
        </p>

        <div className="mt-10 rounded-xl p-5 sm:p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Why Learn with Learnosphere?
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 h-7 w-7 text-blue-600 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong className="text-blue-700">Expert-Led Content:</strong>{" "}
                Learn from industry professionals and passionate educators who
                bring real-world experience to every lesson.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 h-7 w-7 text-blue-600 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong className="text-blue-700">Flexible Learning:</strong>{" "}
                Study at your own pace, on your own schedule, from anywhere in
                the world. Our platform adapts to your life.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 h-7 w-7 text-blue-600 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong className="text-blue-700">Practical Skills:</strong>{" "}
                Gain knowledge and abilities you can immediately apply in your
                career or personal projects, making a real impact.
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 h-7 w-7 text-blue-600 mr-3 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong className="text-blue-700">Supportive Community:</strong>{" "}
                Connect with fellow learners, share insights, and grow together
                in a collaborative and encouraging environment.
              </span>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-xl font-semibold text-center">
          Join Learnosphere today and start your journey towards a brighter,
          more knowledgeable future.
        </p>
      </div>
    </div>
  );
};

export default About;
