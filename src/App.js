import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Books from './components/Pages/Books'; 
import { books } from './data';
import Bookinfo from './components/Pages/Bookinfo';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books1" render={() => <Bookinfo books={books} />} />
      <Footer />
     </div>
    </Router>
  );
}

export default App;
