import Home from './Home'
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Meal from './Meal'
import Visit from './Visit'

function App() {
  return (

    /*
    <>
      header위에 div있는 거 이상하기때문에 <>빈 거로 두는 게 나음
      <Header />
      <Home />
      <Footer/>
    </>
    */

    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='meal' element={<Meal />} />
        <Route path='visit' element={<Visit />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
