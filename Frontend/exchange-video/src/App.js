import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanLayout from './pages/Layouts/PlanLayout';
import Phone from './pages/Phone';
import Welcome from './pages/Welcome';


function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path='/' Component={Welcome} />
          <Route exact path='/register' Component={Phone} />
          </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
