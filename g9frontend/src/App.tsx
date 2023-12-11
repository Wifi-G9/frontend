import React, {ReactNode, useState} from 'react';
import './App.css';
import './components/MainPage/MainPageStyle.css'
import {MainPage} from "./components/MainPage/MainPage";

import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import {CraftPost} from "./components/CraftPost/CraftPost";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CraftPost />} />
                <Route path="/craft-post" element={<CraftPost />} />
                <Route path="/main" element={<MainPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App
