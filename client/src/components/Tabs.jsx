import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="bg-rose-500 h-full md:h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      <div className="flex w-full lg:w-[35%] px-5 md:px-7 lg:px-10 pt-5">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`hover:bg-gray-950/70 ${
              activeTab === child.props.label
                ? "border-b-2 border-white bg-gray-950/70 shadow-md"
                : ""
            } flex-1 text-white uppercase font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="w-full px-5 md:px-7 lg:px-10">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div
      label={label}
      className="hidden"
    >
      {children}
    </div>
  );
};
export { Tabs, Tab };
