import React from 'react'
// importing 3 pictures for row 1 
import pink1 from "../../images/pink_person1.png"
import pink2 from "../../images/pink_person2.png"
import pink3 from "../../images/pink_person3.png"
// importing persons pictures
import person_pink1 from "../../images/person_pink1.png"
import person_pink2 from "../../images/person_pink2.png"
import person_pink3 from "../../images/person_pink3.png"
// importing primary content pics
import primary_pink1 from "../../images/primary_pink1.png"
import primary_pink2 from "../../images/primary_pink2.png"
import primary_pink3 from "../../images/primary_pink3.png"
// importing persona image
import personaimage from "../../images/personaimage.png"
// importing mobile images
import mobile_pink1 from "../../images/mobile_pink1.png"
import mobile_pink2 from "../../images/mobile_pink2.png"
// importing devflow image
import devflow from "../../images/Devflow.png";
// importing personicon from mui
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// importing userflow
import userflow from "../../images/userflow.JPG"


export const Problempaper = () => {
    return (
        <div>
                <div className="container">
            <h3 className="testclass papertestchallenge" >01- The Problem</h3>

                <section className="problemsSection">

                    <div className="problemsection__1">
                        <div className="row">
                            <div className="col-md-8 problemsection__1 col-sm-10">
                                <h3>So many people journal but very few find the motivation to be consistent</h3>
                                <p>A lot of people understand the benefits of journalling but very few journal or understand the benefits of journalling. However people experience emotions everyday and do not understand the direct relationship of processing emotions through journalling. </p>

                            </div>
                        </div>
                    </div>


            <h3 className="testclass px-5 sidebtn2 papertest">02 - Goals</h3>


                    <h2 className="problemsection__2h2 my-4">What are the primary Goals?</h2>
                    <div className="problemsection__2">

                        <div className="row">
                            <div className="ellipse__1 col-md-4 mx-4 my-2 col-sm-12">
                                <div className="row">
                                    <div className="col-md-12 col-4 avatarDiv">
                                        {/* <img src={pinkcircle}   alt="av2"/> */}
                                        <PersonIcon style={{ fontSize: "130px", padding: "1rem", color: "white", backgroundColor: "rgba(251, 200, 155, 0.5)", borderRadius: "4.5rem" }} />


                                    </div>
                                    <div className="col-md-12 col-8 ">
                                        <p className="my-3"><span style={{ color: "rgba(251, 200, 155, 0.5)" }}>Users </span>  want to journal consistently to track and understand their emotions</p>

                                    </div>
                                </div>
                            </div>
                            <div className="ellipse__2 mx-4 col-md-4 my-2 col-sm-12">
                                <div className="row">
                                    <div className="col-md-12  col-4 avatarDiv2">
                                        {/* <img src={pinkcircle} alt="av3"/> */}
                                        <BusinessCenterIcon style={{ fontSize: "128px", padding: "1rem", color: "white", backgroundColor: "rgba(251, 200, 155, 0.5)", borderRadius: "4.5rem" }} />

                                    </div>
                                    <div className="col-md-12 col-8">
                                        <p className="my-3" ><span style={{ color: "rgba(251, 200, 155, 0.5)" }}>Business Goal -</span>  to be the most web accessible journal app that accomodates
different journalling methods </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

<h3 className="testclass px-5 sidebtn3 papertest">03-USERS</h3>

                    <div className="problemsection__3 mx-auto justify-content-center text-center pl-5">
                        <div className="row my-3">
                            <div className="col-md-12">
                                <h3>The primary users for Paperspace are young working professionals</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 my-2"><img className="img-fluid" src={pink1} alt="imagess" /></div>
                            <div className="col-md-4 my-2"><img className="img-fluid" src={pink2} alt="imagess" /></div>
                            <div className="col-md-4 my-2"><img className="img-fluid" src={pink3} alt="imagess" /></div>
                        </div>
                    </div>

                </section>

                <section className="userinsitghtsMain">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 userinsight__h3">
                                <h3>User-insights</h3>
                                <h4>I interviewed 12 college students (First-time cannabis users) virtually in countries where cannabis is legal.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="cardsSection text-center">
                        <div className=" row my-3 text-center">
                            <div className="col-md-4 col-12  my-3 text-center">
                                <div className="card__insight_pink">
                                    <div className="cardText_pink">
                                        <p style={{ height: "445px" }}>
                                            “ For me, Journalling is a way of putting out my negative emotions and have a better understanding of my trigger points”
                                </p>
                                    </div>
                                    <div className="cardprofile row text-center ">
                                        <div className="row ml-4 w-100 d-flex align-items-center">
                                            <div className="col-md-4 col-sm-4 col-4 ">
                                                <img src={person_pink1} alt="person" className="AvatarClass cocl-md-4 ml-5 img-fluid" />

                                            </div>

                                            <div className="col-md-4 col-sm-4 col-4 "><p className="text-dark"> Magarita, 22
 <br /> entry-level Engineer</p></div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 my-3">
                                <div className="card__insight_pink">
                                    <div className="cardText_pink">
                                        <p style={{ height: "455px" }}>
                                            “ I really want to journal everyday but it’s hard to find the motivation to write consistently on a daily basis”
                                </p>
                                    </div>
                                    <div className="cardprofile row text-center ">
                                        <div className="row ml-4 w-100 d-flex align-items-center">
                                            <div className="col-md-4 col-sm-4 col-4  ">
                                                <img src={person_pink2} alt="person" className="AvatarClass ml-5 " />
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-4"><p className="text-dark"> Sharon, 26<br />
Architect</p></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 col-12 my-3">
                                <div className="card__insight_pink">
                                    <div className="cardText_pink">
                                        <p style={{ height: "455px" }} >
                                            “some journalling apps have too many sub-features and i find them very distracting. I just need a place to write”
                                </p>
                                    </div>
                                    <div className="cardprofile row text-center">
                                        <div className="row ml-4 w-100 d-flex align-items-center">
                                            <div className="col-md-4 col-sm-4 col-4 ">
                                                <img src={person_pink3} alt="person" className="AvatarClass cocl-md-4 ml-5" />

                                            </div>
                                            <div className="col-md-4 col-sm-4 col-4 "><p className="text-dark"> Chidimma, 28
 <br /> Photographer</p></div>

                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                {/* Primary concerns section from here */}


                <section className="PrimaryConcerns mx-auto pl-5 ">
                    <div className="row my-5">
                        <div className="col-md-12 text-center primaryConernP my-4">
                            <p >Primary concerns that stood out</p>
                        </div>
                    </div>

                    <div className="row my-5 ">
                        <div className="col-md-4 primarybox text-center">
                            <img src={primary_pink1} alt="" />
                            <p>Intimidated and unable
to start journalling </p>
                        </div>
                        <div className="col-md-4 primarybox text-center ">
                            <img src={primary_pink2} height="125px" alt="" />
                            <p>Unable to Journal
consistently </p>
                        </div>
                        <div className="col-md-4 primarybox text-center">
                            <img src={primary_pink3} height="125px" width="60%" alt="" />
                            <p>Overwhelmed by excessive sub-features </p>
                        </div>
                    </div>
                </section>
                {/* user persona section starts */}


                <section className="userpersonamain my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 userpersonatext">
                                <h3>
                                    User-Persona
                </h3>
                                <p>
                                    We created a user persona for the ideal person that will use Paperspace
                </p>
                            </div>
                        </div>
                        <div className="row imgrowuserpersona my-5">
                            <div className="col-md-10">
                                <img src={personaimage} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>


                <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>
                {/* virtual environment paragraph section starts*/}

<h3 className="testclass sidebtn4 papertestchallenge">04- CHALLENGE</h3>


                <section className="virtualenvpara2 pl-3 ml-3">
                    <h4>
                        How do we provide a digital space for people to write freely and reflect upon emotions in an intuitive way?
               </h4>
                </section>
        </div>
        </div>
    )

}
