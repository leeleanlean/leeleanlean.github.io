import React from 'react'

const LayoutMain = (props: {title?: string, className?: string, children: React.ReactNode}) => {
  return (
    <div className="layout-content-container">
      {
        props.title && <h3 className="title">{props.title}</h3>
      }
      <div className={props.className ? `${props.className} bg-white` : 'bg-white'}>
        {props.children}
      </div>
    </div>
  )
}
export default LayoutMain