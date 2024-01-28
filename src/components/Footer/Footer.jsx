import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Link
                className="footer__link"
                to="https://maksimgolovanovfrontend.ru"
                target="_blank"
            >
                Дизайн и разработка этого сайта
            </Link>
        </footer>
    );
};

export default Footer;
