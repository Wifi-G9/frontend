import './App.css';
import './pages/MainPage/MainPageStyle.css'
import {MainPage} from "./pages/MainPage/MainPage";

import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import {UserPage} from "./pages/UserPage/UserPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/user-page/:username" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
