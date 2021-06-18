import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from './Component/dashboard/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Dashboard/>
      </BrowserRouter>
  
   
    </div>
  );
}

export default App;
