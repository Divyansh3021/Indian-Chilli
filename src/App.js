import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import {HashRouter as Router,
   Routes,
    Route} from 'react-router-dom'

function App() {

  const [mode, setMode] = useState("none");

  const toggleMode = () => {
    if(mode=="none"){
      setMode("flex")
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home  modeController = {toggleMode} mode = {mode}/>}/>
          <Route path='/loggedin'element={<Home modeController = {toggleMode} mode = {mode}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
