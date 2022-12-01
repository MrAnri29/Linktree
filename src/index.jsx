import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Views
import { App } from './views/App';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </React.StrictMode>
);