import { Outlet } from 'react-router-dom';
import './styles/App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
