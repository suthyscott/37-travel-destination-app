import './App.css';
import Header from "./components/Header/Header"
import Home from './components/Home'
import HooksExampleOne from './components/HooksExampleOne';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <HooksExampleOne />
    </div>
  );
}

export default App;
