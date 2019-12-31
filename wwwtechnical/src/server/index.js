import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import serialize from 'serialize-javascript'
import { fetchPokemons } from '../shared/api'
import { matchPath, StaticRouter } from 'react-router-dom'
import routes from '../shared/routes'
import { Provider } from 'react-redux'
import store from '../shared/store'
import { matchRoutes } from 'react-router-config';
import render from './render'

const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('*', async (req, res, next) => {
  const actions = matchRoutes(routes, req.path)
  .map(({route}) => route.component.fetching ? route.component.fetching({...store, path: req.path}) : null)
  .map(async actions => await Promise.all(
    (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve))) 
  ))
  await Promise.all(actions)
  const context = {}
  const content = render(req.path, store, context)

  res.send(content)
})


app.listen(3000, () => {
  console.log('Server listen on port 3000')
})
