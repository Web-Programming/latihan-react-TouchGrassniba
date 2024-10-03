
import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from './route';


function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <h1>Universitas MDP</h1>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <NavLink to=""className="navbar-brand" exact = "true">
      Navbar
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/"className="navbar-brand" exact = "true">Home</NavLink>
        </li>
          <li class="nav-item">
          <NavLink to="/product"className="navbar-brand" exact = "true">Product</NavLink>
        </li>
          <li class="nav-item">
          <NavLink to="/registrasi"className="navbar-brand" exact = "true">Registrasi</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className='main container'>
      <Routes>
        {routes.map((route, i)=>{
          const  {path, Component } = route;
          return <Route key={i} path={path} element={<Component/>}/>;
        })}
      </Routes>
    </div>

      </div>
    </React.Suspense>
  );
}

export default App;
