import React from 'react'

const Header = () => {
  return (
    <header id="header" role="banner">
    <div className="header__inner">
      <div className="header__logo">
        <a href="/">portfolio <em>react</em></a>
      </div>
      <div className="header__nav" role="navigation" aria-label="메인메뉴">
        <ul>
          <li>
            <a href="/intro">intro</a>
          </li>
          <li>
            <a href="/skill">skill</a>
          </li>
          <li>
            <a href="/site">site</a>
          </li>
          <li>
            <a href="/portfolio">portfolio</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>

        </ul>
      </div>
      <div className="header__nav__mobile" 
        id="headerToggle" 
        aria-controls="primary-menu" 
        aria-expanded="false"
        role="button">
        <span>

        </span>
      </div>
    </div>
  </header>
  )
}

export default Header