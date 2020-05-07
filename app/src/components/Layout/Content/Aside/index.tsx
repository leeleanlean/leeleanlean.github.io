/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:12:02
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-07 17:31:27
 */
import React, { useState, useEffect, useContext } from 'react'
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'

import { HeartTwoTone } from '@ant-design/icons'
import LayoutContext from '../../../../store/LayoutContext'

const AsideMenu = () => {
  /**
   * useContext
   */
  const context:any = useContext(LayoutContext)
  const childrens = context.asideMenu

  /**
   * useState
   */
  const [active, setActive] = useState(0)

  /**
   * useEffect
   */
  useEffect(() => {
    const path = window.location.hash.split('#')[1]
    const index = childrens.findIndex((item: { path: string }) => item.path.includes(path))
    setActive(index)
  }, [childrens])

  return (
    <Router>
      <ul className="layout-content-aside">
        <li className="logo">
          <HeartTwoTone
            twoToneColor="#f85959"
            style={{
              fontSize: '16px',
              marginLeft: '1px',
              marginRight: '6.5px'
            }} />李林林-前端开发
        </li>
        {
          childrens && childrens.map((item:any, index:number) => {
            return <li key={index}>
              <Link
                to={item.path}
                replace
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

export default AsideMenu
