import { Outlet } from 'react-router-dom';
import './styles/App.css';
import Header from './components/header/Header';
import SortMenu from './components/sort-menu/SortMenu';

function App() {
  return (
    <div className="app">
      <Header />
      <SortMenu />
      <Outlet />
    </div>
  );
}

export default App;
