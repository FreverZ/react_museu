import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Register1 from '../components/register1'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Travel Agency1</title>
        <meta property="og:title" content="Register - Travel Agency1" />
      </Helmet>
      <nav data-role="Header" className="register-navbar">
        <h1 className="register-logo">Museus de Portugal</h1>
        <div className="register-container1">
          <div className="register-right-side">
            <div className="register-links-container">
              <span className="login-text"><a href="/home" className="landing-page-link">Home</a></span>
              <span className="login-text1"><a href="/not-found" className="landing-page-link">Sobre nós</a></span>
              <span className="login-text2"><a href="/not-found" className="landing-page-link">Contactos</a></span>
            </div>
          </div>
        </div>
      </nav>
      <Register1></Register1>
    </div>
  )
}

export default Register
