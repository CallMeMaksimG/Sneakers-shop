import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <img className="header__logo" src="/img/logo.svg"></img>
                <div className="header__info">
                    <h3>SNEAKERSHOP</h3>
                    <p>Магазин кроссовок</p>
                </div>
            </div>

            <ul className="header__right">
                <li>
                    <img src="/img/cart.svg"></img>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/account.svg"></img>
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
}

export default Header;
