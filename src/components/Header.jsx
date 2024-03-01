import React from 'react'
import '../style/Style.css'
import logo from '../assets/Hansen_LogoFinal.png'

const Header = ({ handleEvent }) => {
    return (
        <div className='header'>
            <div className='logo'>
                <a onClick={() => handleEvent('About')}>
                    <img className='logoImg' src={logo} alt="logo" />
                </a>
            </div>

            <div className='nav'>
                <button className='navButton' onClick={() => handleEvent('About')}>About</button>
                <button className='navButton' onClick={() => handleEvent('Portfolio')}>Portfolio</button>
                <button className='navButton' onClick={() => handleEvent('Resume')}>Resume</button>
                <button className='navButton' onClick={() => handleEvent('Contact')}>Contact</button>
            </div>
        </div>
    )
}

export default Header