import './Header.scss';

function Header({ onClickCart }) {
    return (
        <header className="header">
            <div className="header__left">
                <img className="header__logo" src="/img/icon/logo.svg"></img>
                <div className="header__info">
                    <h3>SNEAKERSHOP</h3>
                    <p>Магазин кроссовок</p>
                </div>
            </div>

            <ul className="header__right">
                <li className="header__favorite">
                    <img src="/img/icon/favorite.svg"></img><span>Избранное</span>
                </li>
                <li className="header__cart" onClick={onClickCart}>
                    <img src="/img/icon/cart.svg"></img>
                    <span>0 руб.</span>
                </li>
                <li>
                    <img src="/img/icon/account.svg"></img>
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
}

export default Header;
