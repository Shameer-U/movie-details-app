import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route path="/" component={PageNotFound} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
