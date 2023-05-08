import './App.css';
import Header from "./components/Header/Header"
import Home from './components/Home'
import HooksExampleOne from './components/HooksExampleOne';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hooks' element={<HooksExampleOne/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
