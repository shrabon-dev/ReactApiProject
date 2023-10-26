import React from 'react'
import './index.css'
import logo from '../../assets/react.svg'

export default function Navbar() {
  return (
    <>
    {/* Navbar Start  */}
    <nav className='navbar'>
        <div className="container">
            <div className='flex justify-between align-center'>
                {/* logo start */}
                <div className="logo">
                    <picture>
                        <img src={logo} alt="logo" />
                    </picture>
                </div>
                {/* menus start */}
                <ul>
                    <li><a href="#">Currency</a></li>
                    <li><a href="#">Coming Soon</a></li>
                    <li><a href="#">Coming Soon</a></li>
                    <li><a href="#">Coming Soon</a></li>
                    <li><a href="#">Coming Soon</a></li>
                </ul>
                {/* button start */}
                <div className="button">
                    <picture>
                        <img src={logo} alt="logo" />
                    </picture>
                </div>
            </div>
        </div>
    </nav>
    {/* Navbar End  */}
    </>
  )
}
