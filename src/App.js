
function App() {
    return (
        <div className="grain">
            <div className="wrapper">
                <header className="header">
                    <div className="header__left">
                        <img className="header__logo" src="/img/logo.svg"></img>
                        <div className="header__info">
                            <h3>SNEAKERSHOP</h3>
                            <p>Магазин кросовок</p>
                        </div>
                    </div>

                    <ul className="header__right">
                        <li>
                            <img src="/img/cart.svg"></img>
                            <span>1205 руб.</span>
                        </li>
                        <li><img src="/img/account.svg"></img>
                        <span>Профиль</span>
                        </li>
                    </ul>
                </header>
                <main className="main">
                    {/* <h1>Все кросовки</h1> */}
                </main>
            </div>
        </div>
    );
}

export default App;
