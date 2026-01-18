import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store'
import { setAuthToken } from './utils/api'
import { getUserProfile } from './slices/userSlice'

// Check for token in localStorage and set it
const token = localStorage.getItem('userToken');
if (token) {
  setAuthToken(token);
  store.dispatch(getUserProfile());
}

// Force dark mode
document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
