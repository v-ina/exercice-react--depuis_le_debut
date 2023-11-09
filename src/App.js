import logo from './logo.svg';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <>
      {/* header위에 div있는 거 이상하기때문에 <>빈 거로 두는 게 나음 */}
      <Header />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
