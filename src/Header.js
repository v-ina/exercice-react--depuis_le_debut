import ProfilMenu from './ProfilMenu'

function Header(){



    return (
        <header>
            <nav>
                <ul className='flex'>
                    <li><a href="">logoImg</a></li>
                    <li><a href="">Best restaurant</a></li>
                    <li><a href="">Best trip place</a></li>
                    <li>
                        <ProfilMenu />
                    </li>
                </ul>
            </nav>

            <h1>Bienvenue A mon Blog</h1>
        </header>
    )
}
export default Header