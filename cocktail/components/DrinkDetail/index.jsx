import React from "react";

const DrinkDetail = ({ drinksData }) => {
  return (
    <div className="flex flex-col justify-center mx-10 my-8">
      {drinksData.map((data, index) => (
        <div key={index} className="mx-2 my-2 rounded-md md:flex md:justify-center">
          <div className="md:mr-10 md:mt-4 md:w-[375px]">
            <img src={data.strDrinkThumb} alt={data.strDrink} className="rounded-lg object-cover w-full" />
          </div>
          <div className="">
            <p className="text-md text-start mt-4 leading-relaxed italic">
              <span className="font-semibold">Drink Name : </span>
              {data.strDrink}
            </p>
            <p className="text-md text-start font-normal italic leading-relaxed">
              <span className="font-semibold">Category :</span> {data.strCategory}
            </p>
            <p className="text-md text-start font-normal italic leading-relaxed">
              <span className="font-semibold">Instructions :</span> <br /> {data.strInstructions}
            </p>
            <p className="text-md text-start font-semibold italic leading-relaxed">Ingredient : </p>
            {data.strIngredient1 ? <p className="text-md text-start font-normal italic leading-relaxed">1. {data.strIngredient1}</p> : ""}
            {data.strIngredient2 ? <p className="text-md text-start font-normal italic leading-relaxed">2. {data.strIngredient2}</p> : ""}
            {data.strIngredient3 ? <p className="text-md text-start font-normal italic leading-relaxed">3. {data.strIngredient3}</p> : ""}
            {data.strIngredient4 ? <p className="text-md text-start font-normal italic leading-relaxed">4. {data.strIngredient4}</p> : ""}
            {data.strIngredient5 ? <p className="text-md text-start font-normal italic leading-relaxed">5. {data.strIngredient5}</p> : ""}
            {data.strIngredient6 ? <p className="text-md text-start font-normal italic leading-relaxed">6. {data.strIngredient6}</p> : ""}
            {data.strIngredient7 ? <p className="text-md text-start font-normal italic leading-relaxed">7. {data.strIngredient7}</p> : ""}
            {data.strIngredient8 ? <p className="text-md text-start font-normal italic leading-relaxed">8. {data.strIngredient8}</p> : ""}
            {data.strIngredient9 ? <p className="text-md text-start font-normal italic leading-relaxed">9. {data.strIngredient9}</p> : ""}
            {data.strIngredient10 ? <p className="text-md text-start font-normal italic leading-relaxed">10. {data.strIngredient10}</p> : ""}
            {data.strIngredient11 ? <p className="text-md text-start font-normal italic leading-relaxed">11. {data.strIngredient11}</p> : ""}
            {data.strIngredient12 ? <p className="text-md text-start font-normal italic leading-relaxed">12. {data.strIngredient12}</p> : ""}

            <p className="text-md text-start font-semibold italic leading-relaxed">Measure : </p>

            {data.strMeasure1 ? <p className="text-md text-start font-normal italic leading-relaxed">{data.strMeasure1}</p> : ""}
            {data.strMeasure2 ? <p className="text-md text-start font-normal italic leading-relaxed">{data.strMeasure2}</p> : ""}
            {data.strMeasure3 ? <p className="text-md text-start font-normal italic leading-relaxed">{data.strMeasure3}</p> : ""}
            {data.strMeasure4 ? <p className="text-md text-start font-normal italic leading-relaxed">{data.strMeasure4}</p> : ""}
            {data.strMeasure5 ? <p className="text-md text-start font-normal italic leading-relaxed">{data.strMeasure5}</p> : ""}
            {data.strMeasure6 ? <p className="text-md text-start font-normal italic leading-relaxed">{data.strMeasure6}</p> : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrinkDetail;
