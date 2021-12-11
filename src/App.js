import './App.css';
import Home from "./components/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Routes, Route } from 'react-router-dom';
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/editUser';
import NewUser from './components/pages/newUser/NewUser';
import ProductsList from './components/pages/productsList/ProductsList';
import Product from './components/pages/product/Product';

function App() {
  return (
    <>
      <Topbar/>
      
      <div className="container-box">
        <Sidebar/>
        

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Users' element={<UserList />} />
          <Route path='/editUser' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/Products' element={<ProductsList />} />
          <Route path='/editProduct' element={<Product />} />
        </Routes>










      </div>


    </>
  );
}

export default App;