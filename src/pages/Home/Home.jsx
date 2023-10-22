import React from 'react';
import Card from '../../components/Card';

const Home = ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
}) => {
    return (
        <main className="main">
            <div className="main__top">
                <h1 className="main__title">
                    {searchValue
                        ? `Поиск по запросу "${searchValue}"`
                        : 'Все кроссовки'}
                </h1>
                <div className="search">
                    <img
                        className="search__icon"
                        src="./img/icon/search.svg"
                        alt="search"
                    />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="search__clear-btn"
                            src="./img/icon/clear.svg"
                            alt="clear"
                        />
                    )}
                    <input
                        onChange={onChangeSearchInput}
                        className="search__input"
                        placeholder="Поиск..."
                        value={searchValue}
                    />
                </div>
            </div>
            <div className="cards">
                {items
                    .filter(
                        (item) =>
                            item.model.toLowerCase().includes(searchValue) ||
                            item.brand
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                    )
                    .map((card) => (
                        <Card
                            key={card.id}
                            id={card.id}
                            brand={card.brand}
                            model={card.model}
                            img={card.img}
                            price={card.price}
                            onAddToFavorite={onAddToFavorite}
                            onAddCart={onAddToCart}
                        />
                    ))}
            </div>
        </main>
    );
};

export default Home;
