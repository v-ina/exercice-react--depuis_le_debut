import ProfilMenu from './ProfilMenu'
// import "./Header.css";
import "./Header.scss";

function Header(){
    return (
        <header>
            <nav>
                <ul className='flex'>
                    <li><a href="/home">Acceuil</a></li>
                    <li><a href="/meal">Best restaurant</a></li>
                    <li><a href="/visit">Best trip place</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li>
                        <ProfilMenu />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header