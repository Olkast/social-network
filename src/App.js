import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Diologes/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route  path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs/*' element={<Dialogs/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

