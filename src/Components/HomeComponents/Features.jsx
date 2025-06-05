import React from "react";
import { FEATURES } from "../../Contents/Contents";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-1 bg-blue-50 rounded-2xl p-5 lg:p-10"
        >
          {feature.icon && (
            <feature.icon size={48} className="feature-icon-style" />
          )}
          <h4 className="text-lg font-semibold">{feature.title}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
