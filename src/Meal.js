import Header from "./Header"
import Footer from "./Footer"
import './Meal.scss'

function Meal(){
    return(
        <>
            <Header />
            <main className="Meal--main">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam consequat cursus. Sed ipsum risus, dictum quis lorem ac, aliquet accumsan leo. Integer laoreet augue justo, non dictum metus aliquet eget. Ut eget pharetra massa. Nullam odio dui, placerat nec nibh eu, faucibus scelerisque leo. Ut vehicula lorem et leo egestas ullamcorper. Curabitur sit amet lacinia arcu. Nunc in tortor a leo facilisis malesuada vel vel purus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam consequat cursus. Sed ipsum risus, dictum quis lorem ac, aliquet accumsan leo. Integer laoreet augue justo, non dictum metus aliquet eget. Ut eget pharetra massa. Nullam odio dui, placerat nec nibh eu, faucibus scelerisque leo. Ut vehicula lorem et leo egestas ullamcorper. Curabitur sit amet lacinia arcu. Nunc in tortor a leo facilisis malesuada vel vel purus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam consequat cursus. Sed ipsum risus, dictum quis lorem ac, aliquet accumsan leo. Integer laoreet augue justo, non dictum metus aliquet eget. Ut eget pharetra massa. Nullam odio dui, placerat nec nibh eu, faucibus scelerisque leo. Ut vehicula lorem et leo egestas ullamcorper. Curabitur sit amet lacinia arcu. Nunc in tortor a leo facilisis malesuada vel vel purus.</p>
            </main>
            <Footer />
        </>

    )
}

export default Meal