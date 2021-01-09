import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
        <header  style={{backgroundColor: "transparent"},{width:"100%"}}>

<section className="navsection">
        <nav className="navbar navbar-expand-lg navbar-light  ">
           <Link to="/" > <a className="navbar-brand " >
                <svg className="m-2" id="logo" width="60" height="93" viewBox="0 0 68 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 83.4706V27.2124C0.303402 20.9808 4.41017 17.6772 14.6012 17.6772C25.0957 17.8677 29.3542 21.2638 29.3542 27.2124V83.4706C29.0508 89.7022 24.6406 93.0057 14.6012 93.0057C3.80336 92.8152 0 89.2287 0 83.4706ZM9.12373 28.4423V82.1481C9.27544 85.1686 9.73054 87.3402 14.6012 87.3402C19.7699 87.3402 20.2304 84.6952 20.2304 82.1481V28.4423C20.0787 25.4218 19.4719 23.3428 14.6012 23.3428C9.43256 23.4353 9.12373 25.7973 9.12373 28.4423Z" fill="#2F2C2C"/>
                    <path d="M51.557 67.7637C39.5239 67.7637 35.2871 64.0411 35.2871 58.4572V2.86836C35.2871 1.34449 37.4922 0.245117 40.5425 0.245117C43.4248 0.245117 45.4565 1.34449 45.4565 2.86836V16.888C45.4565 18.1126 46.7026 18.9126 47.8187 18.4337C49.3845 17.7588 51.8225 17.2527 55.4579 17.2527C62.2357 17.2527 68.0004 20.5508 68.0004 26.2218V58.4572C68.0004 64.4656 62.913 67.7637 51.557 67.7637ZM45.4565 57.6953C45.6245 60.4001 46.1337 63.1105 51.557 63.1105C56.9804 63.1105 57.6576 60.5743 57.8256 58.3701V55.1536V54.8979V27.0653C57.8256 24.6979 57.4842 22.325 51.557 22.325C47.3203 22.325 45.4565 24.1863 45.4565 27.9089V57.6953Z" fill="#2F2C2C"/>
                    <path d="M23.1613 0.446304C25.5994 2.89539 25.063 6.99897 22.0832 8.7351L11.9734 14.6238C11.1119 15.1245 10.1963 14.0578 10.8194 13.2795L20.8967 0.582364C21.4601 -0.136034 22.522 -0.195901 23.1613 0.446304Z" fill="#2F2C2C"/>
                    </svg>

            </a></Link>
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse  navbar-collapse mt-0" id="navbarText">
                <ul className="navbar-nav  navuls ml-auto d-flex justify-content-around w-50">
                    <li className="nav-item active">
                      <Link to="/borocolli" ><a className="nav-link" >Work <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/about" > <a className="nav-link" >Info</a></Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/playground" > <a className="nav-link" >Playground</a></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" ><a className="nav-link" >Contact</a></Link>
                    </li>
                </ul>
                <span className="navbar-text">
                {/* <!-- Navbar text with an inline element --> */}
               
                </span>
            </div>
        </nav>
    </section>
    </header>
    


    {/* <!-- nav bar ends --> */}

        </>
        
    )
}
