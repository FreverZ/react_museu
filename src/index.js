import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Register from './views/register'
import Login from './views/login'
import Museu1 from './views/museu1'
import Museu3 from './views/museu3'
import Museu2 from './views/museu2'
import LandingPage from './views/landing-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Register} exact path="/register" />
        <Route component={Login} exact path="/login" />
        <Route component={Museu1} exact path="/museu1" />
        <Route component={Museu3} exact path="/museu3" />
        <Route component={Museu2} exact path="/museu2" />
        <Route component={LandingPage} exact path="/" /> {/* Rota para a LandingPage */}
        <Route component={LandingPage} exact path="/home" /> {/* Rota para a LandingPage */}
        <Route component={NotFound} path="**" /> {/* Rota para qualquer outro caminho não definido */}
        <Redirect to="/not-found" /> {/* Redirecionamento padrão para /not-found */}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
