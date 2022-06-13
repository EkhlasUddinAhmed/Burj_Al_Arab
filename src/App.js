import React, { createContext, useState } from 'react';
import './App.css';
import { Routes,Route, Navigate} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Logout from './components/Logout/Logout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (

       <AuthProvider>
           <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Navigate replace to="home"/>} />
            <Route path="/book/:bedType" 
            element={
            <ProtectedRoute>
              <Book />
            </ProtectedRoute>} 
            />
            <Route path="*" element={<Home/>} />
       </Routes>
       </AuthProvider>
  );
}

export default App;
