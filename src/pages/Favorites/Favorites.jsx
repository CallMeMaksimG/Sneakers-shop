import { Link } from 'react-router-dom';

import './Favorites.scss';

import React from 'react';
import Card from '../../components/Card';

const Favorites = ({ favorites, onAddToFavorite, onAddToCart }) => {
    return (
        <main className="favorites">
            <section className="favorites__nav">
                <Link to="/">
                    <button className="favorites__nav-back-btn">
                        <img src="../../../img/icon/back.svg" alt="Назад" />
                    </button>
                </Link>
                <h1 className="favorites__nav-title">Избранное</h1>
            </section>
            <section className="favorites__items">
                {favorites.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        brand={card.brand}
                        model={card.model}
                        img={card.img}
                        price={card.price}
                        favorited={true}
                        onAddToFavorite={onAddToFavorite}
                        onAddCart={onAddToCart}
                    />
                ))}
            </section>
        </main>
    );
};

export default Favorites;
