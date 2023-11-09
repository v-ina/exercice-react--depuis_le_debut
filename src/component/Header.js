import { Link } from "react-router-dom";
import ProfilMenu from './ProfilMenu'
// import "./Header.css";
import "./Header.scss";

function Header(){
    return (
        <header>
            <nav>
                <ul className='flex'>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/meal">Best restaurant</Link></li>
                    <li><Link to="/visit">Best trip place</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <Link to="/monprofil"><ProfilMenu /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header