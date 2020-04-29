/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:17:04
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-29 15:39:31
 */
import React, {
  useState
} from 'react'
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'

import Menu from '@/router/router'

const Header = () => {
  const [active, setActive] = useState(0)
  return (
    <div className='header'>
      <Router>
        <ul>
          {
            Menu ? Menu.map((item, index) => {
              return <li key={index}>
                <Link
                  to={item.path}
                  className={ active === index ? 'active' : '' }
                  onClick={() => setActive(index)}>
                  {item.meta.title}
                </Link>
              </li>
            }) : <div>MenuError</div>
          }
        </ul>
      </Router>
    </div>
  )
}

export default Header