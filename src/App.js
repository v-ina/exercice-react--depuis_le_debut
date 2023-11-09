import Home from './page/Home'
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './page/Contact';
import Meal from './page/Meal'
import Visit from './page/Visit'
import Monprofil from './page/Monprofil'

function App() {
  return (

    /*
    <>
      header위에 div있는 거 이상하기때문에 <>빈 거로 두는 게 나음
      <Header />
      <Home />
      <Footer/>
    </>


Le dossier components appelle vos composants qui sont appelés dans vos pages (Header, Footer etc)
    */

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/visit' element={<Visit />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/monprofil' element={<Monprofil />} />
        
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
