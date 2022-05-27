import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home/HomePage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Purchase from './pages/Purchase/Purchase';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar/Navbar';


function App() {

  return (
    <div  className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/register" element={<Register />}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
