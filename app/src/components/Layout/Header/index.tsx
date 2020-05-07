import React from 'react'
import Menu from './components/Menu'
import Timer from './components/Timer'

function LayoutHeader() {
  return (
    <div className="layout-header">
      <div className="content">
        <Menu></Menu>
        <Timer></Timer>
      </div>
    </div>
  )
}

export default LayoutHeader