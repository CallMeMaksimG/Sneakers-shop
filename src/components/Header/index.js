import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context';
import './Header.scss';

function Header({ onClickCart }) {
    const { cartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((acc, curentValue) => {
        return acc + curentValue.price;
    }, 0);
    return (
        <header className="header">
            <Link to="/">
                <div className="header__left">
                    <img
                        className="header__logo"
                        src="/img/icon/logo.svg"
                    ></img>
                    <div className="header__info">
                        <h3>SNEAKERSHOP</h3>
                        <p>Магазин кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="header__right">
                <Link to="/favorites">
                    <li className="header__favorite">
                        <img src="/img/icon/favorite.svg" alt="Избранное"></img>
                        <span>Избранное</span>
                    </li>
                </Link>
                <li className="header__cart" onClick={onClickCart}>
                    <img src="/img/icon/cart.svg" alt="Корзина"></img>
                    <span>{totalPrice} руб.</span>
                </li>
                <Link to="/profile">
                    <li className="header__profile">
                        <img src="/img/icon/account.svg" alt="Профиль"></img>
                        <span>Профиль</span>
                    </li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
