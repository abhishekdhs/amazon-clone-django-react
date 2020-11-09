import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import All_products from './components/pages/All_products';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/all_products" component={All_products} />
          <Route path="/" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
