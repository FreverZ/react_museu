import React from 'react'
import { useHistory } from 'react-router-dom'; // Importe o useHistory se você estiver usando o React Router
import PropTypes from 'prop-types'

import './sign-in.css'

const SignIn = (props) => {

  const history = useHistory(); // Inicialize o useHistory para permitir o redirecionamento

  // Função para lidar com o clique do botão de criar conta
  const redirectToRegister = () => {
    // Redirecione para a página de registro
    history.push("/register");
  };
  const redirectToHome = () => {
    // Redirecione para a página de registro
    history.push("/home");
  };


  return (
    <div className="sign-in-container thq-section-padding">
      <div className="sign-in-max-width thq-section-max-width">
        <div className="sign-in-container1 thq-section-padding">
          <div className="sign-in-form">
            <div className="sign-in-container2">
              <h2 className="thq-heading-2 sign-in-text">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
            <form className="sign-in-form1">
              <div className="sign-in-email">
                <label
                  htmlFor="thq-sign-in-10-email"
                  className="thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-10-email"
                  required="true"
                  placeholder="Email"
                  className="sign-in-textinput thq-input thq-body-large"
                />
              </div>
              <div className="sign-in-password">
                <div className="sign-in-textfield">
                  <div className="sign-in-container3">
                    <label
                      htmlFor="thq-sign-in-10-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-in-10-password"
                    required="true"
                    placeholder="Password"
                    className="sign-in-textinput1 thq-input thq-body-large"
                  />
                </div>
                <span className="sign-in-text4 thq-body-small">
                  <a href="/not-found" className="sign-in-link">Esqueceste-te da password ?</a>
                </span>
              </div>
            </form>
            <button type="submit" className="sign-in-button thq-button-filled" onClick={redirectToHome}>
              <span className="sign-in-text5 thq-body-small">
                {props.action1}
              </span>
            </button>
          </div>
        </div>
        <div className="sign-in-container4 thq-section-padding">
          <div className="sign-in-container5">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="sign-in-text7 thq-body-large">{props.content2}</p>
          </div>
          <button type="submit" className="sign-in-button1 thq-button-filled" onClick={redirectToRegister}>
            <span className="sign-in-text8 thq-body-small">
              {props.action2}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

SignIn.defaultProps = {
  heading1: 'Fazer login',
  action2: 'Criar conta',
  heading2: 'Create an account',
  content2: 'Junta-te à nossa comunidade e descobre os melhores museus de Portugal.',
  action1: 'Login',
  content1: 'Acede à tua conta para descobrires os melhores museus de Portugal.',
}

SignIn.propTypes = {
  heading1: PropTypes.string,
  action2: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
}

export default SignIn
