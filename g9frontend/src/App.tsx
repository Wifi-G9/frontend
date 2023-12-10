import './App.css';
import './pages/MainPage/MainPageStyle.css'
import {MainPage} from "./pages/MainPage/MainPage";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {UserPage} from "./pages/UserPage/UserPage";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";
import {CraftPost} from "./components/CraftPost/CraftPost";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/" element={<MainPage />} />
                <Route path="/:username" element={<UserPage />} />
                <Route path="/:username/craft-post" element={<CraftPost />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
