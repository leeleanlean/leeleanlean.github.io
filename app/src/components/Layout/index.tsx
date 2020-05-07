/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 13:46:34
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-07 09:39:10
 */
import React from 'react'
import Header from './Header/index'
import Content from './Content/index'

import { LayoutProvider } from '../../store/LayoutContext'

function Layout() {
  return (
    <div className="layout">
      <LayoutProvider>
        <Header />
        <Content />
      </LayoutProvider>
    </div>
  )
}

export default Layout
