
import { Route, Routes } from 'react-router-dom';
import './App.css';

import  Home  from './Components/Home/HomeRedux';
import  Settings  from './Components/Settings/SettingsRedux';
import { Header } from './Components/Header/Header';
import  AboutMe  from './Components/AboutMe/AboutMeRedux';
import { LogIn } from './Components/LogIn/LogIn';
import  Timer  from './Components/Timer/Timer.Redux';
import LogOut from './Components/LogOut/LogOutRedux';
import  ToDo  from './Components/ToDO/toDoRedux';
import Style from './Components/Style/styleRedux';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='aboutMe' element={<AboutMe/>}/>
        <Route path='logIn' element={<LogIn/>}/>
        <Route path='timer' element={<Timer/>}/>
        <Route path='logOut' element={<LogOut/>}/>
        <Route path='toDO' element={<ToDo/>}/>
     </Routes>
     <Style/>
    </div>
  );
}

export default App;
