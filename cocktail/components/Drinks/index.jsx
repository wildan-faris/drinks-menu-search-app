import React from "react";
import Link from "next/link";

const Drinks = ({ drinksData }) => {
  return (
    <div className="flex flex-wrap justify-center my-8 mx-auto">
      {drinksData.map((data) => (
        <Link href={`/cocktail/${data.idDrink}`}>
          <div key={data.idDrink} className="mx-4 my-4 bg-gray-100 rounded-md hover:cursor-pointer ">
            <img src={data.strDrinkThumb} width={230} height={140} alt={data.strDrink} className="rounded-t-lg object-fill" />
            <p className="text-xl text-center font-semibold mt-2">{data.strDrink}</p>
            <p className="text-xl text-center font-light pb-4">{data.strCategory}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Drinks;
