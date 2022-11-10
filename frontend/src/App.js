import './App.css';
import NavBar from './routes/NavBar';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from './routes/NavRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <NavRoutes />
     </BrowserRouter>
    </div>
  );
}

export default App;
