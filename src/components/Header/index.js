import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './Header.scss';

function Header({ onClickCart }) {
    const { totalPrice } = useCart();
    return (
        <header className="header">
            <Link to="/">
                <div className="header__left">
                    <img
                        className="header__logo"
                        src={process.env.PUBLIC_URL + "/img/icon/logo.svg"}
                        alt="logo"
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
                        <img src={process.env.PUBLIC_URL + "/img/icon/favorite.svg"} alt="Избранное"></img>
                        <span>Избранное</span>
                    </li>
                </Link>
                <li className="header__cart" onClick={onClickCart}>
                    <img src={process.env.PUBLIC_URL + "/img/icon/cart.svg"} alt="Корзина"></img>
                    <span>{totalPrice.toLocaleString()} руб.</span>
                </li>
                <Link to="/profile">
                    <li className="header__profile">
                        <img src={process.env.PUBLIC_URL + "/img/icon/account.svg"} alt="Профиль"></img>
                        <span>Профиль</span>
                    </li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
