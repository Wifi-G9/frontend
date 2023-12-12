import './App.css';
import './pages/MainPage/MainPageStyle.css'
import {MainPage} from "./pages/MainPage/MainPage";

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
