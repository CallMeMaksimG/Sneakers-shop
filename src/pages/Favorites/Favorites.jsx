import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import AppContext from '../../context';

import './Favorites.scss';

import Card from '../../components/Card';

const Favorites = ({ onAddToFavorite, onAddToCart }) => {
    const { favorites } = useContext(AppContext);

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
            {favorites.length > 0 ? <section className="favorites__items">
                { favorites.map((card) => (
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
            </section> : <h1 className="favorites__empty">Список избранного пуст</h1>}
            
                
        </main>
    );
};

export default Favorites;
