import React from 'react'
import './index.css'

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
                        {/* <img src="" alt="logo" /> */}
                        LOGO
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
                    <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    </nav>
    {/* Navbar End  */}
    </>
  )
}
