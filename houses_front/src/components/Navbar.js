import React from 'react'
import '../App.css'
import logo from '../home.svg'

function Navbar() {
    return (
        
            <nav>
                <div>
                <h1>Houser</h1>
                </div>

                <div className='house'>
                    <img src={logo} alt="house" />
                </div>
            </nav>
        
    )
}
export default Navbar