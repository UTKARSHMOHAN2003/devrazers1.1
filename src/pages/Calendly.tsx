import React, { useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = ({ showWidget, setShowWidget }) => {
  const widgetRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setShowWidget(false);
      }
    }

    if (showWidget) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWidget]);

  if (!showWidget) return null; // Don't render if widget is hidden

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div ref={widgetRef} className="bg-white p-4 rounded-lg shadow-lg relative w-full max-w-2xl">
        <button
          onClick={() => setShowWidget(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <InlineWidget url="https://calendly.com/utkarshmohan0703" />
      </div>
    </div>
  );
};

export default Calendly;
