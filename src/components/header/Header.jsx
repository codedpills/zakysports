import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.logo}>
        ZakySports<span>.com</span>
      </div>
      <div className={headerStyles.headerlinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">Latest News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
