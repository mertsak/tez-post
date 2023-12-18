import React from "react";

const StatisticCard = ({ title, amount, img }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg flex p-6 gap-4">
      <div className="rounded-full bg-white w-16 h-16 p-2">
        <img src={img} alt={title} />
      </div>

      <div>
        <p className="mb-2 text-lg font-medium text-gray-400">{title}</p>
        <p className="text-lg text-gray-200 font-semibold">{amount}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
