import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Menu from './pages/Menu';
import Menu2 from './pages/Menu2';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import CustNavbar from './components/CustNavbar';
import QR from './pages/QR';
import Order from './pages/Order';
import Sales from './pages/Customer';
import EditForm from './pages/EditForm';
// import Cart from './pages/Cart';
import HomeLayout from './layouts/HomeLayout';
import RootLayout from './layouts/RootLayout'
import Test from './pages/Test';
import {ProtectedRoute} from "./components/ProtectedRoute"

import './App.css'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
            <Route 
            index 
            element={<Menu />} />
            <Route 
            path="QR" 
            element={<QR />} />
            <Route 
            path="Order" 
            element={<Order />} />
            <Route 
            path="EditForm"
            element={<EditForm />}
            />
            <Route 
            path="Customer" 
            element={<Sales />}
            />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
