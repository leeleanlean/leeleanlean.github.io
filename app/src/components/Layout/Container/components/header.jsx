/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:17:04
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-28 18:21:46
 */
import React, {
  useState
} from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import Menu from '@/router/config'

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
                  to={item.url + '/index'}
                  className={ active === index ? 'active' : '' }
                  onClick={() => setActive(index)}>
                  {item.meta.title}
                </Link>
              </li>
            }) : <div></div>
          }
        </ul>
      </Router>
    </div>
  )
}

export default Header