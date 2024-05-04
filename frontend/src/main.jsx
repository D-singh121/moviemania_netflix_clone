import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { store, persistor } from './redux_store/store.js'
import { Provider } from 'react-redux' //connects the React app to the Redux store
import { PersistGate } from 'redux-persist/integration/react' // to manage persisted state




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Wrapping the app with PersistGate to handle persisted state */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

)
