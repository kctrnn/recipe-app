import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './components/Recipe';

import axios from 'axios';

function App() {
  const APP_ID = '8328b2dd';
  const APP_KEY = '2d86b3579dc389c7f01544efca39ab0f';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('coffee');

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setRecipes(response.data.hits);
      } catch (err) {
        console.log(err);
      }
    }

    getRecipes();
  }, [query]);

  function updateSearch(event) {
    setSearch(event.target.value);
  }

  function getSearch(event) {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          type='text'
          className='search-bar'
          onChange={updateSearch}
          value={search}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
