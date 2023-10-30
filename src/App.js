import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import queryString from 'query-string';
import Header from './components/Header';
import Grain from './components/Grain';
import Cart from './components/Cart/index';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import AppContext from './context';
import Profile from './pages/Profile/Profile';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cartItemsResponse = await axios.get(
                'http://localhost:30001/cart'
            );
            const favoritesResponse = await axios.get(
                'http://localhost:30001/favorites'
            );
            const itemsResponse = await axios.get(
                'http://localhost:30001/items'
            );

            setIsLoading(false);

            setCartItems(cartItemsResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const openedCart = () => {
        setCartOpened(true);
    };

    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => item.id === obj.id)) {
                axios.delete(`http://localhost:30001/cart/${obj.id}`);
                setCartItems((prev) =>
                    prev.filter((item) => item.id !== obj.id)
                );
            } else {
                axios.post('http://localhost:30001/cart', obj);
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Не удалось добавить в корзину');
        }
    };

    const onRemoveItem = (id, obj) => {
        axios.delete(`http://localhost:30001/cart/${id}`);
        setCartItems(obj.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`http://localhost:30001/favorites/${obj.id}`);
                setFavorites((prev) =>
                    prev.filter((item) => item.id !== obj.id)
                );
            } else {
                const { data } = await axios.post(
                    'http://localhost:30001/favorites',
                    obj
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в избранное');
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (obj, id) => {
        return obj.some((obj) => obj.id === id);
    };

    return (
        <AppContext.Provider
            value={{ items, cartItems, favorites, onAddToCart, onAddToFavorite, isItemAdded, setCartOpened }}
        >
            <>
                {cartOpened
                    ? (document.body.style.overflow = 'hidden')
                    : (document.body.style.overflow = '')}
                {/* {cartOpened && (
                    )} */}
                    
                    <Cart
                        items={cartItems}
                        addToCart={onAddToCart}
                        onRemove={onRemoveItem}
                        onClose={() => setCartOpened(false)}
                        setCartItems={setCartItems}
                        opened={cartOpened}
                    />

                <Grain />

                <div className="container">
                    <Header onClickCart={openedCart} />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    items={items}
                                    cartItems={cartItems}
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                    onChangeSearchInput={onChangeSearchInput}
                                    onAddToFavorite={onAddToFavorite}
                                    onAddToCart={onAddToCart}
                                    favorites={favorites}
                                    isLoading={isLoading}
                                />
                            }
                        ></Route>
                        <Route
                            path="/favorites"
                            element={
                                <Favorites
                                    onAddToFavorite={onAddToFavorite}
                                    onAddCart={onAddToCart}
                                />
                            }
                        ></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                    </Routes>
                </div>
            </>
        </AppContext.Provider>
    );
}

export default App;
