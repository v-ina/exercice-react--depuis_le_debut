import Header from "./Header"
import Footer from "./Footer"
import './Visit.scss'

function Visit (){
    return(
        <>
            <Header />
            <main className="visit--main">
                <article>
                    <h2>nom d'endroit</h2>
                    <p>une petite description</p>
                </article>
                <article>
                    <h2>nom d'endroit</h2>
                    <p>une petite description</p>
                </article>
                <article>
                    <h2>nom d'endroit</h2>
                    <p>une petite description</p>
                </article>
            </main>
            <Footer />
        </>

    )
}

export default Visit