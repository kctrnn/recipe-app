import React from 'react';
import style from './Recipe.module.css';

const Recipe = (props) => {
  const { title, calories, image, ingredients } = props;
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}> {ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img className={style.image} src={image} alt='' />
    </div>
  );
};

export default Recipe;
