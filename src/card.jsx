import React from "react";

const Card = ({ data }) => {
  return (
    <div className="p-2 bg-white shadow-lg rounded-lg mb-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{data.email}</p>
      <p className="text-gray-700">{data.message}</p>
    </div>
  );
};

export default Card;
