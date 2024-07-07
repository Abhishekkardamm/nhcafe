import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  './App.css';
import Home from './screens/Home';
import Signup from "./screens/Signup";
import Login from './screens/Login';

function App() {
  return (
    <>

    <Router>
      <div>
        <Routes>
          <Route exact path="/" element ={  <Home/>} />
          <Route exact path="/login" element ={  <Login/>} />
          <Route exact path="/creatuser" element ={  <Signup/>} />
        </Routes>
      </div>
    </Router>
   
    </>
  
  );
}

export default App;
