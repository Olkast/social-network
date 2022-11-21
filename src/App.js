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



const App = (props) => {
    console.log(props)

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile profilePage={props.state?.profilePage} />}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.state?.dialogsPage} addMessage={props.addMessage} updatePost={props.updatePost} />}/>
                        <Route path='/news' element={<News/>} />
                        <Route path='/setting' element={<Setting/>} />
                        <Route path='/music' element={<Music/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;


