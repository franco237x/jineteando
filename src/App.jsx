import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Home from './Pages/Home';
import Bikes from './Pages/Bikes';
import NotFound from './Pages/NotFound';
import Perfil from './Pages/Perfil';
import Helpme from './Pages/Helpme';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Router>
      <Menu />
      <div>
        {!isAuthenticated ? (
          <LoginButton onClick={() => loginWithRedirect()} />
        ) : (
          <LogoutButton onClick={() => logout({ returnTo: window.location.origin })} />
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/perfil" element={isAuthenticated ? <Perfil /> : <Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Helpme" element={<Helpme />} />
      </Routes>
    </Router>
  );
}

export default App;
