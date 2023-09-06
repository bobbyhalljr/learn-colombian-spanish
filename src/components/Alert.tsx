import React, { useState, useEffect } from 'react';

const Alert = ({ text, type }: any) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Hide the alert after 4 seconds (4000 milliseconds)

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`my-12 rounded-2xl shadow-sm font-semibold ${
            type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          <div className={`p-4 alert-${type}`}>
            <span>{text}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
