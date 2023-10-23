import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/index';
import Header from './components/Header';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get('http://localhost:30001/items').then((response) => {
            setItems(response.data);
        });
        axios.get('http://localhost:30001/cart').then((response) => {
            setCartItems(response.data);
        });
        axios.get('http://localhost:30001/favorites').then((response) => {
            setFavorites(response.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('http://localhost:30001/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id, obj) => {
        axios.delete(`http://localhost:30001/cart/${id}`);
        setCartItems(obj.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        console.log(obj);
        if (favorites.find((favObj) => favObj.id === obj.id)) {
            axios.delete(`http://localhost:30001/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
        } else {
            const { data } = await axios.post(
                'http://localhost:30001/favorites',
                obj
            );
            setFavorites((prev) => [...prev, data]);
        }
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

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                items={items}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                            />
                        }
                    ></Route>
                    <Route
                        path="/favorites"
                        element={
                            <Favorites
                                items={favorites}
                                onAddToFavorite={onAddToFavorite}
                                onAddCart={onAddToCart}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
