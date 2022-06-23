import React from 'react';
import Portfolio from '../Portfolio';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Header({currentCategory}) {
    const {name, description } = currentCategory;

    return (
        <section>
        <h1>{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <Portfolio category={currentCategory.name} />


    </section>
    )
}

export default Header;