/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:12:02
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-30 16:34:53
 */
import React, { useState, useEffect } from 'react'
import router from '../../../../router/router'

const Menu = () => {
  console.log('Menu')
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
    <div>
      {
        childs && childs.length && childs.map((item, index) => {
          return <p key={index}>{item.meta.title}</p>
        })
      }
    </div>
  )
}

export default Menu
