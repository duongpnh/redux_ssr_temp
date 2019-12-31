import React from 'react'
import { NavLink } from 'react-router-dom'

const menu = [
  {
    name: 'Countries',
    param: 'countries'
  },
  {
    name: 'Todos',
    param: 'todos'
  }
]

const Navbar = () => (
  <ul>
    {menu.map(({name, param}) => (
      <li key={name}><NavLink activeStyle={{fontWeight: 'bold'}} to={`/${param}`}>{name}</NavLink></li>
    ))}
  </ul>
)

export default Navbar
