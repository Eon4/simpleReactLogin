import { useState } from 'react'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from './pages/SignUpPage'
import { MainLayout} from './MainLayout/mainlayout'

//SimpleLogin Virker - name og email er langsomt til at komme frem når man logger ind
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
