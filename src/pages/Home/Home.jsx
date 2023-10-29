import React, { useContext, useState, useEffect } from 'react';
import queryString from 'query-string';
import Card from '../../components/Card';
import AppContext from '../../context';
import { useLocation } from 'react-router-dom';

const SORT_KEYS = ['price'];
function sortSneakers(items, key) {
    const sortedItems = [...items];

    if (!key || !SORT_KEYS.includes(key)) {
        return sortedItems;
    }
    sortedItems.sort((a, b) => a[key] - b[key]);
    return sortedItems;
}

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
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedItems, setSortedItems] = useState(
        sortSneakers(items, sortKey)
    );

    useEffect(() => {
        if (!sortKey) {
            setSortKey();
            setSortedItems([...items]);
        }
        setSortedItems(sortSneakers(items, sortKey));
    }, [items, sortKey]);

    const [dropdownSortItem, setDropdownSortItem] = useState('Сортировка');

    const onClickDropdownItem = (event) => {
        const dropdownItemText = event.target.innerText;
        setDropdownSortItem(dropdownItemText);
    }

    const { isItemAdded } = useContext(AppContext);
    const renderItems = () => {
        return (
            isLoading
                ? [...Array(8)]
                : sortedItems.filter(
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
                    <span>{dropdownSortItem}</span>{' '}
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
                        <li data-id="1" className="sorted__list-item" onClick={onClickDropdownItem}>
                            По умолчанию
                        </li>
                        <li data-id="2" className="sorted__list-item" onClick={onClickDropdownItem}>
                            По возрастанию цены
                        </li>
                        <li data-id="3" className="sorted__list-item" onClick={onClickDropdownItem}>
                            По убыванию цены
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cards">{renderItems()}</div>
        </main>
    );
}

export default Home;
