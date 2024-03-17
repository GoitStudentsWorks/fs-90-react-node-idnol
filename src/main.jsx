import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/fs-90-react-node-idnol">
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <App />
     </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
