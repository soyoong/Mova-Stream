import { useState } from 'react'
import './SideBar.css'

import logo from 'assets/mova-logo-dark.png'

function SideBar() {
  const handleClick = event => {
    console.log('className 👉️', event.currentTarget.className)

    if (event.currentTarget.classList.contains('my-class')) {
      console.log('Element contains class')
    } else {
      console.log('Element does NOT contain class')
    }
  }

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
    </div>
  )
}

export default SideBar
