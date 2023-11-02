import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QR from './pages/QR';
import Order from './pages/Order';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar className="sidebar" /> {/* Apply the "sidebar" class to the Sidebar */}
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={user ? <Menu /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route path="/QR" element={<QR />} />
              <Route path="/Order" element={<Order />} className="order" /> {/* Apply the "order" class to the Order */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
