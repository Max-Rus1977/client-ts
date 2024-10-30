import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import App from './App';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode> 
);

// reportWebVitals();
