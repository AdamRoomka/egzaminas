import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/H&F/Header'
import Home from "./components/Home/Home"
import Registration from './components/Auth/Registration'
import Login from './components/Auth/Login'
import ErrorPage from "./components/ErrorPage/ErrorPage"
import Footer from './components/H&F/Footer'
import { UserProvider } from './untils/context/UserContext';

// admin
import Admin from './components/Pages/Admin/Admin';
import Users from './components/Pages/Admin/Home/User/Users';


import './App.css'

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Header />
          <main className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
          </main>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;