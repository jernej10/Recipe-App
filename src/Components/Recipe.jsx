import React from 'react';
import style from '../recipe.module.css'

const Recipe = ({ title, calories, img, ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul style={{padding: 0}}>
                {ingredients.map(ingredient => (
                    <li key={Math.floor(Math.random() * 1000000)} className={style.listItems}>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories + " Cal"}</p>
            <img className={style.img} src={img} alt={title} />
        </div>
    )
}

export default Recipe