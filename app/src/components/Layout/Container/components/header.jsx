/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:17:04
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-30 13:39:28
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
  // 设置默认顶部菜单active
  const [active, setActive] = useState(() => {
    const hash = window.location.hash
    return Menu.findIndex(item => hash.includes(item.path))
  })
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