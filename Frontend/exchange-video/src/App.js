import './App.css';
import { BrowserRouter } from "react-router-dom";
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';


function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Welcome />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
