import './App.css';
import './pages/MainPage/MainPageStyle.css'
import {MainPage} from "./pages/MainPage/MainPage";

import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import {CraftPost} from "./components/CraftPost/CraftPost";
import {UserPage} from "./pages/UserPage/UserPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/craft-post" element={<CraftPost />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/:username" element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
