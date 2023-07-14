import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanLayout from './pages/Layouts/PlanLayout';
import Phone from './pages/Phone';
import Welcome from './pages/Welcome';
import Rooms from './pages/Rooms';
import Voiceroom from './pages/Voiceroom';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path='/' Component={Welcome} />
          <Route exact path='/register' Component={Phone} />
          <Route exact path='/rooms' Component={Rooms} />
          <Route exact path='/voiceroom' Component={Voiceroom} />
          <Route exact path='/profile' Component={Profile} />
          <Route exact path='/settings' Component={Settings} />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
