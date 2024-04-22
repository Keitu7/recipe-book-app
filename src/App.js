// improting the recipeList script for it to reflect on the main app//
import './App.css';
import React, { useState } from 'react';
import RecipeList from './recipeList'; 

function App() {
  const [recipes, setRecipes] = useState ([
    { id: 1, name: 'Salmon pasta', dietary: 'Non-vegetarian', cookingTime: '25 mins', favorite: false}, 
    { id: 2, name: 'Ponzu tofu', dietary: 'Vegetarian', cookingTime: '20 mins', favorite: false},
    { id: 3, name: 'Chicken stir-fry', dietary: 'Vegetarian', cookingTime: '30 mins', favorite: false},
    { id: 4, name: 'Lentil Conconut curry', dietary: 'Non-vegetarian', cookingTime: '25 mins', favorite: false},
    { id: 5, name: 'Healthy Gnocchi', dietary: 'Vegetarian', cookingTime: '30 mins', favorite: false},
    { id: 6, name: 'Prawn fried rice', dietary: 'Non-vegetarian', cookingTime: '30 mins', favorite: false},
    { id: 7, name: 'Fajita chicken rice', dietary: 'Non-vegetarian', cookingTime: '25 mins', favorite: false},
    { id: 8, name: 'Linguine with Avocado', dietary: 'Vegetarian', cookingTime: '30 mins', favorite: false},
    { id: 9, name: 'Veggie yaki udon', dietary: 'Non-vegetarian', cookingTime: '20 mins', favorite: false},
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
    //because it will deal with filtering ans showing only the favourites list
  };

  const handleFavouriteToggle  = (id) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return {...recipe, favourite: !recipe.favourite };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

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
        <input type="text" placeholder="Search recipes..." onChange={handleFilterChange}></input>
        <button onClick={toggleFavourites}>{showFavourites ? 'Show All' : 'Show Favourites'}</button>
      </div>
      <RecipeList recipes={filteredRecipes} onFavouriteToggle={handleFavouriteToggle} />
    </>
 );
}

export default App;
