import Recipe from '../Recipe';
import recipes from '../../assets/recipes.js';
import React from 'react';

const Menu = () => (
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>
)
export default Menu