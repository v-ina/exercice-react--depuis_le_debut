import Header from '../component/Header'
import Footer from '../component/Footer'
import './Monprofil.scss'

function Monprofil(){
    const user = {
        name : "Yeonsoo",
        img : "blueviolet",
        icon1 : 8,
        icon2 : 20,
        icon3 : 5
    }

    return(
        <>
            <Header />
            <main className='main--monprofil'>
                <div className='user'>
                    <h1> Bonjour! {user.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis ipsum eum facere saepe molestiae quisquam ipsa! Voluptates, perferendis aliquam. Asperiores exercitationem mollitia alias? Consectetur esse nulla alias reprehenderit dicta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, dolor eaque enim, ab earum fuga sint quisquam obcaecati accusamus laboriosam quas error numquam quidem labore voluptate laborum. Mollitia, reiciendis cupiditate?</p>
                    <div>
                        <span className='icon'>A</span>
                        <span className='icon'>B</span>
                        <span className='icon'>C</span>
                    </div>
                    <div>
                        <span>{user.icon1}</span>
                        <span>{user.icon2}</span>
                        <span>{user.icon3}</span>
                    </div>
                </div>
                <div>
                    <div className="profil-img"></div>
                    <p>discord Id #1214</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Monprofil