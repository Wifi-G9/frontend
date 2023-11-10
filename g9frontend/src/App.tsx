import React, {ReactNode, useState} from 'react';
import './App.css';
import './components/MainPage/MainPageStyle.css'
import {MainPage} from "./components/MainPage/MainPage";

import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';


function App() {
    const [count, setCount] =   useState(0)

    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />

            </Routes>
        </BrowserRouter>

    );
}

export default App
