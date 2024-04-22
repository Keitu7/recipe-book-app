import React from 'react';

function Recipe({ recipe, onFavouriteToggle}) {
    const {id, name, dietary, cookingTime, favourite } = recipe;

    return (
        <>
            <h3>{name}</h3>
            <p>Dietary: {dietary}</p>
            <p>Cooking Time: {cookingTime}</p>
            <button onClick={() => onFavouriteToggle(id)}>{favourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
        </>
    );
}

export default Recipe;