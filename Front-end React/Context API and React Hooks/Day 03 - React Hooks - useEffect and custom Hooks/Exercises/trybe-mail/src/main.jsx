import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EmailsProvider from './context/EmailsProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <EmailsProvider>
        <App />
      </EmailsProvider>
    </React.StrictMode>,
);
