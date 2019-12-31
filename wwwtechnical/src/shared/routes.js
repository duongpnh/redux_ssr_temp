import Post from './pages/Post'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import Details from './pages/Details'
import { fetchCategories, fetchPosts } from './api'
import Countries from './pages/Countries';
import Todos from './pages/Todos';

const routes = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    path: '/posts',
    component: Countries
  },
  {
    path: '/todos',
    component: Todos
  }
]

export default routes
