import React, { useContext, useState } from 'react';
import Card from '../../components/Card';
import AppContext from '../../context';

function Home({
    items,
    favorites,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) {
    const { isItemAdded } = useContext(AppContext);
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
                favorited={favorites.some((obj) => obj.id === card.id)}
                loading={isLoading}
                {...card}
            />
        ));
    };

    const [sortOpened, setSortOpened] = useState(false);

    const onClickSortBtn = () => {
        !sortOpened ? setSortOpened(true) : setSortOpened(false);
        document.addEventListener('click', function (event) {
            if (event.target.className !== 'sorted__btn') {
                setSortOpened(false);
            }
        });
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
            <div
                className={!sortOpened ? 'sorted' : 'sorted sorted--open'}
                onClick={onClickSortBtn}
            >
                <div className="sorted__btn">
                    <span>Сортировка</span>{' '}
                    <img
                        className={
                            !sortOpened
                                ? 'sorted__btn-icon'
                                : 'sorted__btn-icon sorted__btn-icon--open'
                        }
                        src="./img/icon/arrow-down.svg"
                        alt="arrow-down"
                    />
                </div>
                <div
                    className={
                        !sortOpened
                            ? 'sorted__dropdown'
                            : 'sorted__dropdown sorted__dropdown--open'
                    }
                >
                    <ul className="sorted__list">
                        <li>По умолчанию</li>
                        <li>По возрастанию цены</li>
                        <li>По убыванию цены</li>
                    </ul>
                </div>
            </div>
            <div className="cards">{renderItems()}</div>
        </main>
    );
}

export default Home;
