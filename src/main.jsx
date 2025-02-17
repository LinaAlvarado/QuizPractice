import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import QuestionView from './pages/QuestionView.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/quiz' element={<QuestionView/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
  
)
