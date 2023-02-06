import './style.css';
import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home'
import About from '../../views/About'
import Login from '../../views/Login';
import Search from '../../views/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/search" element={ <Search/> }/>
      </Routes>
    </div>
  );
}
export default App;