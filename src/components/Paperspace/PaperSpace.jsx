import React from 'react'
import { Header } from '../../utilises/Header';
// import "./BorocolliPage.css";
import img2 from "../../images/paperspace logo.png"
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
// importing emojis
// import happy from "../../images/happy.png"
// import angry from "../../images/angry.png"
// import curious from "../../images/curious.png"
// import calm from "../images/calm.png"
// import thinking from "../../images/thinking.png"
// // importing map
// import map from "../../images/map.jpeg"
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
// importing css
import "./PaperSpace.css"
// importing router
import { Link } from "react-router-dom";

export const PaperSpace = () => {
    return (
        <>
            <section className="borocolliPage2">
                <Header />
                <div className="imgDiv">
                    <img src={img2} className="img-fluid" alt="borocolliimg" /></div>
            </section>
            <div className="container">



                <section className="timeLineSection">
                    <div className="row">
                        <div className="col-md-6 timeline__right">
                            <p> Paperspace   <span className="spanTimeline2">A Journal app that tracks
 users emotions based on their written entries</span></p>
                        </div>
                        <div className="col-md-6 timeline__left">
                            <div className="row">
                                <div className="col-md-12 col-sm-6">
                                    <h4>
                                        Timeline
                </h4>
                                    <p>4 months</p>
                                    <br />
                                    <h4>Role</h4>
                                    <p>UX Research  , Backend Developer</p>
                                    <br />

                                </div>
                                <div className="col-md-12 col-sm-6">
                                    <h4>Tools</h4>
                                    <p>MERN stack, IBM watson Tone analyzer,
Firebase auth</p>
                                    <br />
                                    <h4>platform</h4>
                                    <p>Mobile , ios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

            {/* Problems section from here */}
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

            {/* <section className="purpleBox my-5 ">
               <div className="row">
                   <div className="col-md-12 purpleBox">
                <p>Broccoli fosters a more inclusive cannabis community for first time users by hosting live conversations, virtual music concerts and art classes from certified experts </p>

                   </div>
               </div>
           </section> */}

<div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>



            <section className="sol-05-section my-5">
                <div className="container">
<h3 className="testclass  papertestchallenge ">05- SOLUTION</h3>
                    <div className="row my-5">
                        <div className="col-md-10 sol05sectiontext py-3">
                            <h3>
                                Paperspace allows users to freely write and be more mindful of their emotions through color-coded indicators. It also offers guided prompts for users who need a kick-start to write
                           </h3>
                            <p>
                                Color-coded indicators allow users to see the direct relationship of how their activities influence their emotions and by journalling, they can see the direct benefits of recording their day and emotions in order to optimize productivity and release stress in the most critical time of their carreer journey.
                           </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">



                {/* Customer journey section starts */}


                {/* <section className="customerJourney">
                    <div className="row">
                        <div className="col-md-12 customerjourneypara">
                            <p>
                                Customer Journey Map
                       </p>
                        </div>
                    </div> */}

                    {/* emojis row */}
{/* 
                    <div className="row emojisrow">
                        <div className="col-md-8 d-flex justify-content-around">
                            <img src={happy} alt="happy" />
                            <img src={thinking} alt="think" />
                            <img src={curious} alt="cur" />
                            <img src={angry} alt="angry" />
                            <img src={calm} alt="" />
                        </div>

                    </div>
                    <div className="row my-2">
                        <div className="col-md-8 d-flex justify-content-around">
                            <p>Happy</p>
                            <p>Thinking</p>
                            <p>Curious</p>     <p> Angry </p>     <p>Satisfied</p>

                        </div>
                    </div> */}

                    {/* map row starts */}
{/* 
                    <div className="row my-3">
                        <div className="col-md-10 text-center">
                            <img src={map} className="img-fluid" alt="map" width="100%" />
                        </div>
                    </div>
                </section> */}

                {/* user flow section starts from here */}


                <section className="userflowmain my-5" >
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img src={userflow}  className="img-fluid w-100 h-100" alt="userflow"/>
                            </div>
                        </div>
                    </div>

                </section>


                {/* features section starts */}


                <section className="features">

                    {/* heading row  */}

                    <div className="row">
                        <div className="col-md-10 features__h3 mt-4">
                            <h3>Features</h3>
                        </div>
                    </div>

                    {/* row # 2 */}

                    <div className="row">
                        <div className="col-md-6 col-sm-6 mt-5 row2__feature">
                            <h3>
                                Card Gradients as Mood Indicators
                    </h3>
                            <p>
                                Users can quickly glance at
                                an overview of their moods generated from the users’ written journal
                    </p>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <img src={mobile_pink1} width="70%" alt="mobilepic" />
                        </div>
                    </div>

                    {/* third row */}

                    <div className="row ">
                        <div className="col-md-6 col-sm-6 text-center">
                            <img src={mobile_pink2} width="70%" alt="mobile2" />
                        </div>
                        <div className="col-md-6 col-sm-6 mt-5 p-5 thirdrowpara">
                            <h3>Guided Prompts for Journal writing</h3>
                            <p>Guided prompts are available for users who need a kick
 to start journalling</p>

                        </div>
                    </div>
                    {/* devflow section starts */}

                    <section className="devflowsection">

                        <div className="container">
            <h3 className="testclass papertestchallenge" >05- Developoment</h3>

                            <div className="row">
                                <div className="col-md-12">
                                    <img src={devflow} className="img-fluid" alt="flow-chart" />
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* prototype section */}

                    <section className="prototypeMain">
                        <div className="container">
                            <div className="row my-5">
                                <div className="col-md-10 proto-text">
                                    <h2>Check out the code
 <br /> <span style={{ color: "#5881EA", borderBottom: "2px solid #5881EA" }} >View on Github</span>
                                    </h2>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* two last paragraphs */}


                    <section className="para1">
                        <div className="container">
            <h3 className="testclass papertestchallenge" >06- Conclusion</h3>

                            <div className="row my-5">
                                <div className="col-md-10 para1text my-5">
                                    <h2>
                                        The Takeaway
                           </h2>
                                    <p className="paratext1p" >
                                        I learned a lot on how to collaborate and build a product from start to finish. The biggest lesson was agile development in my code process. I discovered the effectiveness of using Github and making sure not to over-write files. I also learned a lot about the MERN stack and implementing firebase for user authentification.
                           </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="para1">
                        <div className="container">

                            <div className="row my-5">
                                <div className="col-md-10 para1text my-5">
                                    <h2>
                                        2.0 Aspirations
                           </h2>
                                    <p className="paratext1p" >
                                        We plan to build a desktop version as well as more accessible features to journal such as using voice to speech transcribing.
                           </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* credits section starts */}

                    <section className="creditssection">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 creditstexth3">
                                    <h3>Credits</h3>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-4 my-2 creditsname">
                                    <h4>Yang Yang</h4>
                                    <p>UX/UI Designer</p>
                                </div>
                                <div className="col-md-4 my-2 creditsname">
                                    <h4>Eileen Santiago</h4>
                                    <p>Front-end Developer</p>
                                </div>
                                <div className="col-md-4 my-2 creditsname">
                                    <h4>Evonne Oby Okoye</h4>
                                    <p>Back-end Developer</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ending sections */}

                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="spanlineend"></div>

                            </div>
                        </div>
                    </div>

                    <section className="nextproject my-5">
                        <div className="container">
                            <Link to="/borocolli" >
                                <div className="row">
                                    <div className="col-md-12 text-center nextprojecttext">
                                        NEXT PROJECT
                        </div>
                                </div>
                            </Link>
                        </div>
                    </section>



                </section>


            </div>



        </>
    )
}
