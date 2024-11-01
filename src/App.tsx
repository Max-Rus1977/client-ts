import { Outlet } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h2>MAX blog</h2>
      <Outlet />
    </div>
  );
}

export default App;
