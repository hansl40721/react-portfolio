import React from 'react'
import '../style/Style.css'

const Header = ({ handleEvent }) => {
    return (
        <div className='header'>
            <div className='logo'>
                <button onClick={() => handleEvent('About')} src='..\assets\Hansen_LogoFinal.png'></button>
            </div>

            <div className='nav'>
                <button className='navButton' onClick={handleEvent('About')}>About</button>
                <button className='navButton' onClick={handleEvent('Portfolio')}>Portfolio</button>
                <button className='navButton' onClick={handleEvent('Resume')}>Resume</button>
                <button className='navButton' onClick={handleEvent('Contact')}>Contact</button>
            </div>
        </div>
    )
}

export default Header