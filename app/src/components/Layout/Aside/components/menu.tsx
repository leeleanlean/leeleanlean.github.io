/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:12:02
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-30 17:54:18
 */
import React, { useState, useEffect } from 'react'
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'
import router from '../../../../router/router'

const Menu = () => {
  console.log('Menu')
  const [active, setActive] = useState(0)
  const [childs, setChilds] = useState(() => {
    return router.filter(item => item.name === 'Home')[0].children
  })
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.split('#/')[1].split('/')[0]
      setChilds(router.filter(item => item.name === hash)[0].children)
    }, false)
    return () => {
      window.removeEventListener('hashchange', () => {})
    }
  }, [])
  return (
    <Router>
      <ul className="aside-menu">
        {
          childs && childs.length && childs.map((item, index) => {
            return <li key={index}>
              <Link
                to={item.path}
                className={ active === index ? 'active' : '' }
                onClick={() => setActive(index)}>
                {item.meta.title}
              </Link>
            </li>
          })
        }
      </ul>
    </Router>
  )
}

export default Menu
