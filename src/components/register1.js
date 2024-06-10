import React from 'react'

import PropTypes from 'prop-types'

import './register1.css'

const Register1 = (props) => {
  return (
    <div className="register1-container">
      <div className="register1-max-width thq-section-max-width">
        <div className="register1-form-root thq-section-padding">
          <div className="register1-form">
            <div className="register1-title-root">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <div className="register1-have-an-account-login">
                <p className="thq-body-large">
                  Already have an account? Sign in
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
                        Use 8 or more characters
                      </span>
                    </div>
                    <div className="register1-bulletpoint1">
                      <div className="register1-container3"></div>
                      <span className="register1-text06 thq-body-small">
                        One special character
                      </span>
                    </div>
                  </div>
                  <div className="register1-pass-conditions2">
                    <div className="register1-bulletpoint2">
                      <div className="register1-container4"></div>
                      <span className="register1-text07 thq-body-small">
                        One Uppercase character
                      </span>
                    </div>
                    <div className="register1-bulletpoint3">
                      <div className="register1-container5"></div>
                      <span className="register1-text08 thq-body-small">
                        One number
                      </span>
                    </div>
                  </div>
                  <div className="register1-pass-conditions3">
                    <div className="register1-bulletpoint4">
                      <div className="register1-container6"></div>
                      <span className="register1-text09 thq-body-small">
                        One lowercase character
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
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
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
            <button
              type="submit"
              className="register1-button thq-button-filled"
            >
              <span className="register1-text14 thq-body-small">
                {props.action1}
              </span>
            </button>
            <div className="register1-have-an-account-login1">
              <p className="thq-body-large">Already have an account? Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Register1.defaultProps = {
  content1:
    'I want to receive emails about the product, events, and marketing promotions.',
  heading1: 'Welcome to TeleportHQ',
  image1Src:
    'https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxzaWduJTIwdXB8ZW58MHx8fHwxNzEyOTI5MDYzfDA&ixlib=rb-4.0.3&w=600',
  image1Alt: 'SignUp Image',
  action1: 'Create an account',
}

Register1.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default Register1
