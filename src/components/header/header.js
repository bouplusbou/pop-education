import PropTypes from "prop-types"
import React from "react"
import Logo from  "./logo"
import headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.logo}><Logo /></div>
    <nav className={headerStyles.nav}>
      <ul>
        <li><a href="#values">Nos valeurs</a></li>
        <li><a href="#camps">Séjours</a></li>
        <li><a href="#weekends">POP Week-end</a></li>
        <li><a href="#faq">J'ai des questions </a></li>
        <li><a href="#contacts">Contactez-nous</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
