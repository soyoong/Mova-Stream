import { useState } from 'react'
import './sidebar.css'

import { icons } from 'assets/index'

import { appDefineData } from 'constants/appDefineData'
import { Link } from 'react-router-dom'

function SideBar(props) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="sidebar">
      <a className="logo-expand" href="/">
        <img src={icons.logo} alt="logo" className="logo" />
        Mova
      </a>
      <div className="side-wrapper">
        <div className="side-title">MENU</div>
        <div className="side-menu">
          {appDefineData.map((item, index) => {
            if (index <= 8) {
              return (
                <Link className={selected === index ? 'sidebar-link is-active' : 'sidebar-link'} to={item.path}>
                  <img src={selected === index ? item.iconFill : item.iconOutLine} alt={item.title} />
                  {item.title}
                </Link>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div className="side-wrapper">
        <div className="side-title">Other</div>
        <div className="side-menu">
          {appDefineData.map((item, index) => {
            if (index > 8) {
              return (
                <a className={selected === index ? 'sidebar-link is-active' : 'sidebar-link'} href="/">
                  <img src={selected === index ? item.iconFill : item.iconOutLine} alt={item.title} />
                  {item.title}
                </a>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default SideBar
