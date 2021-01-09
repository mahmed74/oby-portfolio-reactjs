import React from 'react'
import { Header } from '../../utilises/Header'
import "./About.css";
// importing images
import girl from "../../images/girl.png"
import { Footer } from '../../utilises/Footer';
export const About = () => {
    return (
        <div>
            <Header/>
            {/* about body starts */}

            <section className="aboutbody my-3">
                <div className="container">
                    <div className="row d-flex align-items-center aboutbodyrow">
                        <div className="col-md-6 my-2 about__desc">
                            <h2>
                            Hello, I am Oby
                            </h2>
                            <p>
                            Design fanatic. Music Maniac. Plaintain-lover. stretch-enthusiast.Always in wanderLust.
Eggs and Ketchup.Mylifeisameme.lavendar
Motivationalspeaker.AspiringArtdirector.
Nigerian.Worked in three countries and still counting.Ambitious.Alignandkerning.write
shortstories.AvidReader.willdesignformoney



                            </p>
                            <h3>
                            Currently based in Toronto, open to relocations
                            </h3>
                            <h4>
                            View Resume
                            </h4>
                        </div>
                        {/* column 1 ends here */}
                        <div className="col-md-6 my-2">
                            <img src={girl} className="img-fluid" alt="girl"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* starting footer from here */}

            <Footer/>
        </div>
    )
}
