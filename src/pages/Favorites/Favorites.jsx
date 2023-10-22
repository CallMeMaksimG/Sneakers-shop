import { Link } from 'react-router-dom';

import './Favorites.scss';

import React from 'react';

const Favorites = () => {
    return (
        <main className="favorites">
            <section className='favorites__nav'>
                <Link to="/"><button className='favorites__nav-back-btn'><img src='../../../img/icon/back.svg' alt="Назад"/></button></Link>
                <h1 className="favorites__nav-title">Избранное</h1>
            </section>
            <section className='favorites__items'>
        favorites
            </section>
        </main>
    );
};

export default Favorites;
