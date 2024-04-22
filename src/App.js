// improting the recipeList script for it to reflect on the main app//
import './App.css';
import React, { useState } from 'react';
import RecipeList from './recipeList'; 

function App() {
  const [recipes, setRecipes] = useState ([
    { id: 1, name: 'Salmon pasta', dietary: 'Non-vegetarian', cookingTime: '25 mins', favorite: false}, 
    { id: 2, name: 'Ponzu tofu', dietary: 'Vegetarian', cookingTime: '20 mins', favorite: false},
    { id: 3, name: 'Chicken stir-fry', dietary: 'Vegan', cookingTime: '30 mins', favorite: false},
    { id: 4, name: 'Lentil Conconut curry', dietary: 'Non-vegetarian', cookingTime: '25 mins', favorite: false},
    { id: 5, name: 'Healthy Gnocchi', dietary: 'Vegan', cookingTime: '30 mins', favorite: false},
    { id: 6, name: 'Prawn fried rice', dietary: 'Non-vegetarian', cookingTime: '30 mins', favorite: false},
    { id: 7, name: 'Fajita chicken rice', dietary: 'Non-vegetarian', cookingTime: '25 mins', favorite: false},
    { id: 8, name: 'Linguine with Avocado', dietary: 'Ketogenic', cookingTime: '30 mins', favorite: false},
    { id: 9, name: 'Veggie yaki udon', dietary: 'Non-vegetarian', cookingTime: '20 mins', favorite: false},
    { id: 10, name: 'Keto-Brownie', dietary: 'Ketogenic', cookingTime: '22 mins', favorite: false},
    { id: 11, name: 'Creamy Keto Tuscan', dietary: 'Ketogenic', cookingTime: '20 mins', favorite: false},
    //the array list of recipes
  ]);

  const [filter, setFilter] = useState('');
  const [showFavourites, setShowFavourites] = useState(false);
  //the state of the favourites filter would go true when favourites are toggled

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const toggleFavourites = () => {
    setShowFavourites(!showFavourites);
    //because it will deal with filtering and showing only the favourites list
  };

  //because this toggle function will update the list of favourite recipes//
  const handleFavouriteToggle  = (id) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return {...recipe, favourite: !recipe.favourite };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  //a const variable because to filter only according to dietary request will change according to searched request//
  const filteredRecipes = recipes.filter(recipe => {
    if (showFavourites && !recipe.favourite) {
      return false;
    }
    if (filter ==='') {
      return true;
    }
    return recipe.dietary.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Recipe Cook Book</h1>
      <div>
        <input id="text" placeholder="Search recipes..." onChange={handleFilterChange}></input>
        <button onClick={toggleFavourites}>{showFavourites ? 'Show All' : 'Show Favourites'}</button>
      </div>
      <RecipeList recipes={filteredRecipes} onFavouriteToggle={handleFavouriteToggle} />
    </>
 );
}

export default App;

/* References: 
PedroTech, 26 May 2021, YouTube. <https://youtu.be/QwarZBtFoFA?si=M0Cxy0p5jqGI2SJ->. Accessed: 14 April 2024.
React.dev. Online. <https://react.dev/learn>. Accesseded: 14 April 2024.
OpenAI.Online. <https://openai.com/>.Prompt: "react router-dom". Accessed: 18 April 2024.
Alison. Learn React. Online. <https://alison.com/>. Accessed: 18 April 2024.*/