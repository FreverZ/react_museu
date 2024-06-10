import React from 'react'
import { useHistory } from 'react-router-dom'; // Importe o useHistory se você estiver usando o React Router
import PropTypes from 'prop-types'

import './register1.css'

const Register1 = (props) => {

  const history = useHistory(); // Inicialize o useHistory para permitir o redirecionamento

  // Função para lidar com o clique do botão de criar conta
  const redirectToHome = () => {
    // Redirecione para a página de registro
    history.push("/home");
  };
  
  return (
    <div className="register1-container">
      <div className="register1-max-width thq-section-max-width">
        <div className="register1-form-root thq-section-padding">
          <div className="register1-form">
            <div className="register1-title-root">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <div className="register1-have-an-account-login">
                <p className="thq-body-large">
                  Já tens conta? <a href="/login">Login</a>
                </p>
              </div>
            </div>
            <form className="register1-form1">
              <div className="register1-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Email address"
                  className="register1-textinput thq-input thq-body-large"
                />
              </div>
              <div className="register1-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  placeholder="Username"
                  className="register1-textinput1 thq-input thq-body-large"
                />
              </div>
              <div className="register1-password">
                <div className="register1-textfield">
                  <div className="register1-container1">
                    <label
                      htmlFor="thq-sign-up-1-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-up-1-password"
                    required="true"
                    placeholder="Password"
                    className="register1-textinput2 thq-input thq-body-large"
                  />
                </div>
                <div className="register1-pass-requirements">
                  <div className="register1-pass-conditions1">
                    <div className="register1-bulletpoint">
                      <div className="register1-container2"></div>
                      <span className="register1-text05 thq-body-small">
                        Usa pelo menos 8 caracteres
                      </span>
                    </div>
                    <div className="register1-bulletpoint1">
                      <div className="register1-container3"></div>
                      <span className="register1-text06 thq-body-small">
                        Um caracter especial
                      </span>
                    </div>
                  </div>
                  <div className="register1-pass-conditions2">
                    <div className="register1-bulletpoint2">
                      <div className="register1-container4"></div>
                      <span className="register1-text07 thq-body-small">
                        Uma letra maiúscula
                      </span>
                    </div>
                    <div className="register1-bulletpoint3">
                      <div className="register1-container5"></div>
                      <span className="register1-text08 thq-body-small">
                        Um número
                      </span>
                    </div>
                  </div>
                  <div className="register1-pass-conditions3">
                    <div className="register1-bulletpoint4">
                      <div className="register1-container6"></div>
                      <span className="register1-text09 thq-body-small">
                        Um caracter minúsculo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="register1-container7">
              <input
                type="checkbox"
                id="thq-sign-up-1-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-1-newsletter"
                className="thq-body-large"
              >
                {props.content1}
              </label>
            </div>
            <div className="register1-terms-agree">
              <p className="thq-body-large">
                <span>
                  Ao criar uma conta, você concorda com os Termos de uso e
                  Política de Privacidade.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <button type="submit" className="register1-button thq-button-filled" onClick={redirectToHome}>
              <span className="register1-text14 thq-body-small">
                {props.action1}
              </span>
            </button>
            <div className="register1-have-an-account-login1">
              <p className="thq-body-large">Ja tens conta ? <a href='/login'>Sign in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Register1.defaultProps = {
  content1:
    'Eu quero receber novidades, promoções e atualizações por e-mail.',
  heading1: 'Bem-vindo a Museus de Portugal',
  image1Src: '',
  image1Alt: '',
  action1: 'Criar conta',
}

Register1.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default Register1
