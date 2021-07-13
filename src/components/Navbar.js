import { Link } from 'gatsby'
import React from 'react'
import '../styles/style.css'
import Simg from '../../static/search.png'
export default function Navbar() {
    return (
        <div className="header">
                <div className="conteiner">
                    <div className="innere-header">
                        <div className="left-header">
                            <div className = "logo">Blog <span>template</span></div>
                            <div className = "btn_search"><img src="../../static/search.png" /></div>
                            <nav>
                                <Link className="nav_link" to ="/">About</Link>
                                <Link className="nav_link" to ="/">Cooperation</Link>
                                <Link className="nav_link" to ="/">Contact</Link>
                            </nav>
                        </div>
                        <nav>
                            <Link className="nav_link" to ="/">Nature</Link>
                            <Link className="nav_link" to ="/">People</Link>
                            <Link className="nav_link" to ="/">Trips</Link>
                            <Link className="nav_link" to ="/">Animals</Link>
                            <Link className="nav_link" to ="/">Fashion</Link>
                            <Link className="nav_link" to ="/">Tech</Link>
                            <Link className="nav_link bold-button" to ="/">...</Link>
                        </nav>
                </div>
            </div>
        </div>
    )
}
