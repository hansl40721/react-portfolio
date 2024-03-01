import React from 'react'
import '../style/style.css'
import logo from '../assets/Hansen_LogoFinal.png'

const Header = ({ activeComponent, handleEvent }) => {
    return (
        <div className='header'>
            <div className='logo'>
                <a onClick={() => handleEvent('About')}>
                    <img className='logoImg' src={logo} alt="logo" />
                </a>
            </div>

            <div className='nav'>
                <button className={`navButton ${activeComponent === 'About' ? 'active' : ''}`} onClick={() => handleEvent('About')}>About</button>
                <button className={`navButton ${activeComponent === 'Portfolio' ? 'active' : ''}`} onClick={() => handleEvent('Portfolio')}>Portfolio</button>
                <button className={`navButton ${activeComponent === 'Resume' ? 'active' : ''}`} onClick={() => handleEvent('Resume')}>Resume</button>
                <button className={`navButton ${activeComponent === 'Contact' ? 'active' : ''}`} onClick={() => handleEvent('Contact')}>Contact</button>
            </div>
        </div>
    )
}

export default Header