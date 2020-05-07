import React from 'react'
import Router from '../../../router/index'
import Aside from './Aside'

const LayoutContent = () => {
  return (
    <div className="layout-content w1200">
      <Aside></Aside>
      <Router></Router>
    </div>
  )
}

export default LayoutContent