import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Started from './pages/Started/Started';
import Sign from './pages/Sign/Sign';

const routes = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Started />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Sign" element={<Sign />} />
      <Route exact path="/SignUp" element={<SignUp />} />
      <Route exact path="/Login" element={<Home />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App