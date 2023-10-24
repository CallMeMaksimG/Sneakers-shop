import React from 'react';
import Card from '../../components/Card';

function Home({
    items,
    cartItems,
    favorites,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) {
    const renderItems = () => {
        return (
            isLoading
                ? [...Array(8)]
                : items.filter(
                      (item) =>
                          item.model.toLowerCase().includes(searchValue) ||
                          item.brand
                              .toLowerCase()
                              .includes(searchValue.toLowerCase())
                  )
        ).map((card, index) => (
            <Card
                key={index}
                onAddToFavorite={onAddToFavorite}
                onAddCart={onAddToCart}
                added={cartItems.some((obj) => obj.id === card.id)}
                favorited={favorites.some((obj) => obj.id === card.id)}
                loading={isLoading}
                {...card}
            />
        ));
    };
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
            <div className="cards">{renderItems()}</div>
        </main>
    );
}

export default Home;
