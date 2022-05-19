import axios from "axios";

const getCocktails = async () => {
  const baseUrl = `www.thecocktaildb.com/api/json/v1/1`;
  try {
    const response = await axios.get(`${baseUrl}/search.php?s=margarita`);
    console.log(response);
  } catch (error) {
    console.log(`Error get Cocktails Name :`, error);
  }
};
export default getCocktails;
