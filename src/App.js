import React from "react"
import "./App.css"
import { Link } from 'react-router-dom';
function App() {

  return (

    <div className="Home">
      <header class="header">

        <a href="#" class="logo"><i class="fas fa-book"></i> Sportify</a>

        <nav class="navbar">
          <a href="#home" class="hover-underline">home</a>
          <a href="#about" class="hover-underline">about</a>
          <a class="hover-underline"><Link to="/course">courses</Link></a>
          <a href="#teacher" class="hover-underline">teacher</a>
          <a href="#review" class="hover-underline">review</a>
          <a href="#blog" class="hover-underline">blog</a>
          <a href="#contact" class="hover-underline">contact</a>
        </nav>

        <div class="icons">
          <div id="login-btn" class="fas fa-user"></div>
          <div id="menu-btn" class="fas fa-bars"></div>
        </div>



      </header>



      <section class="home" id="home">

        <div class="content">
          <h3>Unlock Your Athletic Potential!</h3>
          <p>Unveiling the Best Courses for Sports Enthusiasts, explore the ultimate playbook for athletic excellence</p>
          <a href="/login-signup/login.html" target="_blank" class="btn">
            <span class="text text-1">Login</span>
            <span class="text text-2" aria-hidden="true">Login</span>
          </a>
          <a href="/login-signup/sign-up.html" target="_blank" class="btn">
            <span class="text text-1">Sign-Up</span>
            <span class="text text-2" aria-hidden="true">Sign-Up</span>
          </a>
        </div>

      </section>
      </div>
      )
}
      
export default App