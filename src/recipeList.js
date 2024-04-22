import React from 'react';
import Recipe from '../src/components/recipe';

function RecipeList({ recipes, onFavouriteToggle }){
    return (
        <>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} onFavouriteToggle={onFavouriteToggle} />
            ))}
        </>
    );
}

export default RecipeList;