
import { Link, NavLink } from 'react-router'
import './Nav.css'
export default function Navbar (){


    return(
        <>
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/"><h2>START REACT</h2>
                        </NavLink>
                        </li> 
                    </ul>
            
                <input type="checkbox" id='check' />
                <label htmlFor="check" className='btncheck'>
                <i className="fa-solid fa-bars burger"></i>
                </label>
                      <a href=""></a>

                <ul>
                    <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>        
        </>
    )
}