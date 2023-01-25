import './style.css';
import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home'
import About from '../../views/About'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </div>
  );
}
export default App;