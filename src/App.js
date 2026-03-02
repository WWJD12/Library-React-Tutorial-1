import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import Books from './components/Pages/Books'; 
import { books } from './data';
import Bookinfo from './components/Pages/Bookinfo';
import Cart from './components/Pages/Cart';
import { useEffect, useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) { 
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart]) 
  
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/books" exact element={<Books books={books} />} />
      <Route path="/books/:id" element={<Bookinfo books={books} addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart books={books} />} />
     </Routes>
      <Footer />
     </div>
    </Router>
  );
}

export default App;
