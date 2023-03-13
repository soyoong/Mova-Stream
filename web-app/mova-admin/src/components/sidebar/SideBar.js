import { useState } from 'react'
import './sidebar.css'

import { icons } from 'assets/index'

import { sidebarData } from 'constants/appDefineData'
import { Link } from 'react-router-dom'

function SideBar() {
  const [selected, setSelected] = useState(0)

  const handleSelector = index => {
    setSelected(index)
    // const getElementById = document.getElementById(`${index}`)
    // getElementById.className = 'is-active'
  }

  return (
    <div className="sidebar">
      <a className="logo-expand" href="/">
        <img src={icons.logo} alt="logo" className="logo" />
        Mova
      </a>
      <div className="side-wrapper">
        <div className="side-title">MENU</div>
        <div className="side-menu">
          {sidebarData.map((item, index) => {
            return (
              <a id={`${index}`} className="sidebar-link" onClick={handleSelector(index)} href="/">
                <img src={selected === index ? item.iconFill : item.iconOutLine} alt={item.title} />
                {item.title}
              </a>
            )
          })}
        </div>
      </div>
      {/* <div className="side-wrapper">
        <div className="side-title">Other</div>
        <div className="side-menu">
          {sidebarData.map((item, index) => {
            return (
              <a className={selected === index ? 'sidebar-link is-active' : 'sidebar-link'} href="/">
                <img src={selected === index ? item.iconFill : item.iconOutLine} alt={item.title} />
                {item.title}
              </a>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default SideBar
