import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
            try {
                const [cartItemsResponse, favoritesResponse, itemsResponse] =
                    await Promise.all([
                        axios.get('http://localhost:30001/cart'),
                        axios.get('http://localhost:30001/favorites'),
                        axios.get('http://localhost:30001/items'),
                    ]);

                setIsLoading(false);
                setCartItems(cartItemsResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных');
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const openedCart = () => {
        setCartOpened(true);
    };

    const onAddToCart = async (obj) => {
        try {
            if (cartItems.find((item) => item.id === obj.id)) {
                await axios.delete(`http://localhost:30001/cart/${obj.id}`);
                setCartItems((prev) =>
                    prev.filter((item) => item.id !== obj.id)
                );
            } else {
                await axios.post('http://localhost:30001/cart', obj);
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert('Не удалось добавить в корзину');
            console.error(error);
        }
    };

    const onRemoveItem = (id, obj) => {
        try {
            axios.delete(`http://localhost:30001/cart/${id}`);
            setCartItems(obj.filter((item) => item.id !== id));
        } catch (error) {
            alert('Ошибка при удалении из корзины');
            console.error(error);
        }
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
            value={{
                items,
                cartItems,
                favorites,
                onAddToCart,
                onAddToFavorite,
                isItemAdded,
                setCartOpened,
            }}
        >
                {cartOpened
                    ? (document.body.classList.add('hidden'))
                    : (document.body.classList.remove('hidden'))}

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
                                    onAddToCart={onAddToCart}
                                />
                            }
                        ></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                    </Routes>
                </div>
        </AppContext.Provider>
    );
}

export default App;
