import React from "react";

const DrinkDetail = ({ drinksData }) => {
  return (
    <div className="flex flex-wrap justify-center my-8">
      {drinksData.map((data, index) => (
        <div key={index} className="mx-4 my-4 bg-gray-100 rounded-md">
          <img src={data.strDrinkThumb} width={230} alt={data.strDrink} className="rounded-t-lg object-fill" />
          <p className="text-xl text-center font-semibold mt-2">{data.strDrink}</p>
          <p className="text-xl text-center font-normal">{data.strCategory}</p>
        </div>
      ))}
    </div>
  );
};

export default DrinkDetail;
