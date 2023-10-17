import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart/index';
import { useState } from 'react';

const arr = [
    {
        id: 1,
        brand: 'New Balance',
        model: '990v3 x JJJJound',
        img: './img/sneakers/NB990v3.jpg',
        price: 87990,
    },
    {
        id: 2,
        brand: 'New Balance',
        model: '990v5 x Aimé Leon Dore',
        img: './img/sneakers/NB990v5.jpg',
        price: 118990,
    },
];





function App() {

    const [cartOpened, setCartOpened] = useState(false);
    return (
        <>
            {cartOpened && <Cart onClose={() => setCartOpened(false)} />}
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
                        {arr.map((card) => (
                            <Card
                                key={card.id}
                                brand={card.brand}
                                model={card.model}
                                img={card.img}
                                price={card.price}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
