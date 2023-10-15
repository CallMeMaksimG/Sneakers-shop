import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';

function App() {
    return (
        <>
            <Cart />
            <div className="grain"></div>
            <div className="container">
                <Header />
                <main className="main">
                    <div className="main__top">
                        <h1 className="main__title">Все кроссовки</h1>
                        <div className="search">
                            <img src="./img/search.svg" alt="search" />
                            <input
                                className="search__input"
                                placeholder="Поиск..."
                            />
                        </div>
                    </div>
                    <div className="cards">
                        <Card />
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
