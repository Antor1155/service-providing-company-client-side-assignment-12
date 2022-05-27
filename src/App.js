import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Navbar from './shared/Navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path="/login" element={<Login />}></Route>


      </Routes>
    </div>
  );
}

export default App;
