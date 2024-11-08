import { createRoot } from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import Footer from './Components/Footer';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-fxlyp2lwts1h3fbx.us.auth0.com"
    clientId="Pjc2pDPhCN0Rvn4imHMxQLnnMCDgdTdl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <div>
      <App />
      <Footer />
    </div>
  </Auth0Provider>
);
