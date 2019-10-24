import React from 'react'
import '../App.css'
import logo from '../home.svg'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        
            <nav>
                <div className="title">
                    <Link  to ="/">
                <h1>Houser</h1>
                </Link>
                </div>

                <div className='house'>
                    <img src={logo} alt="house" />
                </div>
            </nav>
        
    )
}
export default Navbar