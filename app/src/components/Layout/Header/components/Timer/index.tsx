import React, { useState, useEffect } from 'react'

const HeaderTimer = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString('en-GB'))
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // 设置日期
  useEffect(() => {
    // setDate
    setDate(new Date().toLocaleDateString())

    // setTime
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="layout-header-timer">Today: {date} {time}</div>
  )
}

export default HeaderTimer
