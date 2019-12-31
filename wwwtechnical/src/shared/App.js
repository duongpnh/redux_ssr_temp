import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import NotFound from './pages/404'
import Navbar from './components/Navbar'
import { renderRoutes } from 'react-router-config'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {renderRoutes(routes)}
          {/* {routes.map(({path, exact, component: C, ...rest}) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <NotFound {...props}/>} /> */}
        </Switch>
      </div>
    )
  }
}

export default App
