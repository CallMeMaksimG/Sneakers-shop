import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart/index';
import { useEffect, useState } from 'react';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    useEffect(() => {
        fetch('https://652e65d80b8d8ddac0b14e80.mockapi.io/items')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };

    const onDeleteCartItem = (obj, id) => {
        setCartItems(obj.filter((item) => item.id !== id));
    };

    return (
        <>
            {cartOpened && (
                <Cart
                    items={cartItems}
                    addToCart={onAddToCart}
                    deleteItems={onDeleteCartItem}
                    onClose={() => setCartOpened(false)}
                />
            )}
            <div className="grain"></div>
            <div className="container">
                <Header onClickCart={() => setCartOpened(true)} />
                <main className="main">
                    <div className="main__top">
                        <h1 className="main__title">Все кроссовки</h1>
                        <div className="search">
                            <img src="./img/icon/search.svg" alt="search" />
                            <input
                                className="search__input"
                                placeholder="Поиск..."
                            />
                        </div>
                    </div>
                    <div className="cards">
                        {items.map((card) => (
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
