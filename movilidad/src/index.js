import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-fxlyp2lwts1h3fbx.us.auth0.com"
    clientId="Pjc2pDPhCN0Rvn4imHMxQLnnMCDgdTdl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);