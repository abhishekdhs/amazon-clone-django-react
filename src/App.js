import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
