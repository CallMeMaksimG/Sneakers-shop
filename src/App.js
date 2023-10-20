import Header from './components/Header';
import axios from 'axios';
import Card from './components/Card';
import Cart from './components/Cart/index';
import { useEffect, useState } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios
            .get('https://652e65d80b8d8ddac0b14e80.mockapi.io/items')
            .then((response) => {
                setItems(response.data);
            });
        axios
            .get('https://652e65d80b8d8ddac0b14e80.mockapi.io/cart')
            .then((response) => {
                setCartItems(response.data);
            });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://652e65d80b8d8ddac0b14e80.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id, obj) => {
        axios.delete(`https://652e65d80b8d8ddac0b14e80.mockapi.io/cart/${id}`);
        setCartItems(obj.filter((item) => item.id !== id));
        console.log(id);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            {cartOpened && (
                <Cart
                    items={cartItems}
                    addToCart={onAddToCart}
                    onRemove={onRemoveItem}
                    onClose={() => setCartOpened(false)}
                />
            )}
            <div className="grain"></div>
            <div className="container">
                <Header onClickCart={() => setCartOpened(true)} />
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
                                    item.model
                                        .toLowerCase()
                                        .includes(searchValue) ||
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
                                    onAddFavorite={() =>
                                        console.log('add to favorite')
                                    }
                                    onAddCart={onAddToCart}
                                />
                            ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
