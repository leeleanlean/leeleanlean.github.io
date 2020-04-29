/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:09:57
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-29 14:26:18
 */
import React from 'react'
import LayoutHeader from './components/header'
import LayoutContent from './components/content'

const Header = () => {
  return(
    <div className="container">
      <LayoutHeader />
      <LayoutContent />
    </div>
  )
}
export default Header
