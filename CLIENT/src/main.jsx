import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './CONTEXT/Store.jsx';
import {ShopProvider} from './CONTEXT/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
<ShopProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ShopProvider>
</AuthProvider>
)
