import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './Components/Layouts/MainLayout';
import Translator from './Pages/Translator/Translator';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout />} >
                    <Route index element={<Translator />} />
                </Route>
            </Routes>
        </Router>

    );
}
