import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import QR from './pages/QR';
import Order from './pages/Order';
import Sales from './pages/Customer';
import EditForm from './pages/EditForm';
//import Sidebar from '../components/Sidebar';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex' }}>
          {/*<Sidebar className="sidebar" /> {/* Apply the "sidebar" class to the Sidebar */}
          <div className="pages">
            <Routes>
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route
                path="/"
                element={user ? <Menu /> : <Navigate to="/login" />}
              />
              <Route path="/QR" 
              element={user ? <QR /> : <Navigate to="/login" />} 
              />
              <Route path="/Order" 
              element={user ? <Order /> : <Navigate to="/login" />}
              />
              <Route path="/Customer" 
              element={user ? <Sales /> : <Navigate to="/login" />}
              />
              <Route path="/EditForm" 
              element={user ? <EditForm /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
