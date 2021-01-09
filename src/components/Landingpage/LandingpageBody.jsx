import React from 'react';
import "./Landingpage.css";
import {Link} from "react-router-dom";

export const LandingpageBody = () => {
    return (
        <>
            <section className="body__landing">
        <h1>Hello , I am Oby.</h1>
        <h4>I’m an Experience designer with a playful, human-centered approach to curating interactive experiences and stories with the intention of building stronger human relationships</h4>
        <div className="selectedwork">
           
               <Link style={{textDecoration:"none"}}  to="./paperspace" ><h4>Selected Works</h4></Link>
            
            <div className="selectedspanline"></div>
        </div>

    </section>
        </>
    )
}
