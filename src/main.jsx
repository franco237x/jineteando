import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Components/Footer'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider legacySameSiteCookie={false}
    domain="dev-fxlyp2lwts1h3fbx.us.auth0.com"
    clientId="Pjc2pDPhCN0Rvn4imHMxQLnnMCDgdTdl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
    <Footer/>
  </StrictMode>
)
