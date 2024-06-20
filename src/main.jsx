import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ContextProvider.jsx'
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Wrap App with Provider and pass store */}

  <ContextProvider>
<BrowserRouter>
  <App />
</BrowserRouter>
  </ContextProvider>
  </Provider>
)
