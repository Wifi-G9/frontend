import React from 'react';
import './App.css';
import './components/MainPage/MainPageStyle.css'
import {MainPage} from "./components/MainPage/MainPage";

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App
