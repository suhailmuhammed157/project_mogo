import "./Navbar.scss";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 50) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      },[navbar])
    return (
          <div className={navbar?'navbar nav-active':"navbar"}>
          <h3 ><a href="#">MoGo</a></h3>
            <div className="links">
                <ul>
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#about"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#head">
                            SERVICE
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">
                            WORK
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#blog">
                            BLOG
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            CONTACT
                        </a>
                    </li>
                    <li className="nav-item nav-icon">
                        <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faCartPlus}/>
                        </a>
                    </li>
                    <li className="nav-item nav-icon">
                        <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faSearch}/>
                        </a>
                    </li>
                </ul>
            </div>
            
          </div>
    );
};

export default Navbar;
