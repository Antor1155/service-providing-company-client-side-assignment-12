import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import Homepage from './pages/Home/HomePage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Myprotfolio from './pages/Myprotfolio';
import Purchase from './pages/Purchase/Purchase';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar/Navbar';
import Nothingfound from './shared/Nothingfound';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/protfolio" element={<Myprotfolio />}></Route>

        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>

          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>

          <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
        </Route >

        <Route path="*" element={<Nothingfound />}></Route>
      </Routes >
      <Footer></Footer>
    </div >
  );
}

export default App;
