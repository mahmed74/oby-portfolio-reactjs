import React from 'react'
import { Header } from '../../utilises/Header';
import "./BorocolliPage.css"
import img2 from "../../images/image 2.png"
import image1 from "../../images/image1.png"
import image2 from "../../images/image2.png"
import image3 from "../../images/image3.png"
import person from "../../images/person.png"
import person2 from "../../images/person2.png"
import person3 from "../../images/person3.png"
import primaryConern1 from "../../images/primary1.png"
import primaryConern2 from "../../images/primary2.png"
import primaryConern3 from "../../images/primary3.png"
import paper1 from "../../images/paper1.png"
import paper2 from "../../images/paper2.png"
import paper3 from "../../images/paper3.png"
import paper4 from "../../images/paper4.png"
import paper5 from "../../images/paper5.png"
import happy from "../../images/happy.png"
import angry from "../../images/angry.png"
import curious from "../../images/curious.png"
import calm from "../../images/calm.png"
import thinking from "../../images/thinking.png"
import map from "../../images/map.jpeg"
import mobile from "../../images/mobile.png"
import mobile2 from "../../images/mobile2.png"
// importing personicon from mui
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// importing routers
import {Link} from "react-router-dom";


export const BorocolliPage = () => {
    return (
        <>
        <section className="borocolliPage">
        <Header/>
        <div className="imgDiv">
        <img src={img2} className="img-fluid" alt="borocolliimg"/></div>
        </section>
        <div className="container">



        <section className="timeLineSection">
            <div className="row">
                <div className="col-md-6 timeline__right">
                <p> Broccoli- <span className="spanTimeline">An interactive social media platform to learn and safely experience cannabis culture</span></p>
                </div>
                <div className="col-md-6 timeline__left">
                <div className="row">
                    <div className="col-md-12 py-1 col-6 col-sm-6">
                    <h4>
                    Timeline
                </h4>
                <p>12 weeks</p>
                <br/>
                <h4>Role</h4>
                <p>UX Research, UI/UX design</p>
                <br/>
                
                    </div>
                <div className="col-md-12 py-1 col-6 col-sm-6">
                    <h4>Tools</h4>
                <p>Figma</p>
                <br/>
                <h4>platform</h4>
                <p>Mobile , ios</p>
                    </div>
                </div>
                </div>
            </div>
        </section>


        <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>


        </div>

       

        <h3 className="testclass " >01- The Problem</h3>

        {/* Problems section from here */}
        {/* <div className="container">  open this line */}

        <section className="problemsSection">

                <div className="problemsection__1">
                    <div className="container">
                    <div className="row">
                    <div className="concheading my-3">
                       <h3 style={{fontFamily: "Product Sans", fontStyle: "normal",fontWeight: "bold",fontSize:"21px",lineHeight: "25px",letterSpacing: "0.02em"}} >The Problem</h3>
                       </div>
                        <div className="col-md-8 problemsection__1 col-sm-10">
                       
                        <h3>Recreational Cannabis is legal in many countries but cannabis culture is still “illicit”</h3>
            <p>Over the past few years, there has been a gradual legalization of marijuana in the world, However in the countries and U.S states where it is legal, there are still stigmas such as the “illicit culture” surrounding marijuana and it’s users remains unchanged. This has caused a major barrier of entry for potential first-time users who want to experience marijuana safely and without judgement from people who are non-users as well as people who are more experienced.</p>
        
                        </div>
                    </div>
                </div>
                </div>

                <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>
                {/* <div className="sidebtn2 sidebtn text-center d-flex align-items-center">
            <h3 className="text-center">02_Goals</h3>
        </div> */}

            <h3 className="testclass px-5 sidebtn2">02 - Goals</h3>
                <div className="container my-5">
                    <div className="row mx-auto ">
                        <div className="col-md-12">
                <h2 className="problemsection__2h2 my-4">What are the primary Goals?</h2>
                </div>
                </div>
                </div>
            <div className="problemsection__2">
               <div className="container">
                <div className="row">
                <div className="ellipse__1 col-md-5 mx-4 col-sm-12">
                    <div className="row">
                        <div className="col-md-8 my-2 col-4 text-center avatarDiv">
                        {/* <img src={avatar2}   alt="av2"/> */}
                        <PersonIcon  style={{fontSize:"130px",padding:"1rem",color:"white",backgroundColor:"#7021FF",borderRadius:"4.5rem"}} />

                
                        </div>
                        <div className="col-md-12 col-8 ">
                        <p className="my-3"><span style={{color:"#7021FF"}}>Users -</span> to learn and have cannabis experiences in a safe space</p>
                
                        </div>
                    </div>
                   </div>
                <div className="ellipse__2 col-md-5 mx-4 col-sm-12">
                    <div className="row">
                        <div className="col-md-10 col-4 my-2 text-center avatarDiv2">
                        {/* <img src={avatar3} alt="av3"/> */}
                        <BusinessCenterIcon style={{fontSize:"125px",padding:"1rem",color:"white",backgroundColor:"#7021FF",borderRadius:"4.5rem"}} />
                        </div>
                        <div className="col-md-12 col-8">
                        <p className="my-3" ><span style={{color:"#7021FF"}}>Business Goal -</span> to be the most reliable and widely used app for cannabis themed information and entertainment</p>
                
                        </div>
                    </div>
                   </div>
                   </div>
                </div>
            </div>


            <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

            {/* <div className="sidebtn3 sidebtn text-center d-flex align-items-center">
            <h3 className="text-center">03_Users</h3>
        </div> */}

<h3 className="testclass px-5 sidebtn3">03-USERS</h3>



            <div className="problemsection__3 mx-auto justify-content-center my-5 ">
            
                <div className="container">
            <div className="row my-3 mt-5">
                <div className="col-md-12 mt-3">
                    <h3>The primary users for Broccoli are Freshman and Sophmore College students</h3>
                </div>
            </div>
            <div className="row pl-5">
                <div className="col-md-4 my-2"><img  className="img-fluid" src={image1}  alt="imagess"/></div>
                <div className="col-md-4 my-2"><img className="img-fluid" src={image2}  alt="imagess"/></div>
                <div className="col-md-4 my-2"><img  className="img-fluid"src={image3}  alt="imagess"/></div>
            </div>
            </div>
            </div>
           </section>

           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

           <section className="userinsitghtsMain">
                <div className="container">
               <div className="row">
                   <div className="col-md-12 userinsight__h3">
                       <h3>User-insights</h3>
                       <h4>I interviewed 12 college students (First-time cannabis users) virtually in countries where cannabis is legal.</h4>
                   </div>
                   </div>
               </div>
               <div className="cardsSection text-center">
                   <div className="container">
                   <div className=" row my-3 text-center">
                   <div className="col-md-4 col-12  my-3 text-center">
                        <div className="card__insight">
                            <div className="cardText">
                                <p>
                                I’ve tried weed once at a party and it was a horrible experience. I was extremely paranoid the next day but my cousin explained to me that there are different strains that have different effects on you mentally. However, all the resources online are from “medical experts” who probably don’t use weed for recreational purposes and then there are the cool people who probably think I just need to chill out”.
                                </p>
                            </div>
                            <div className="cardprofile row text-center ">
                                <div className="row ml-4 w-100 d-flex align-items-center">
                                    <div  className="col-md-4 col-sm-4 col-4 ">
                                <img src={person} alt="person" className="AvatarClass cocl-md-4 ml-5 img-fluid"/>

                                    </div>
                                   
                                <div className="col-md-4 col-sm-4 col-4 "><p className="text-white"> Jamie,21 <br/> Torronto</p></div>

                                   
                                </div>
                                
                            </div>
                        </div>
                   </div>
                   <div className="col-md-4 col-12 my-3">
                        <div className="card__insight">
                            <div className="cardText">
                                <p style={{height:"455px"}}>
                                “I’m a creative person so I’ve always been curious about using marijuana. However, I don’t really go to parties and I don’t think it’s wise to do it by myself in my apartment.”
                                </p>
                            </div>
                            <div className="cardprofile row text-center ">
                                <div className="row ml-4 w-100 d-flex align-items-center">
                                    <div className="col-md-4 col-sm-4 col-4  ">
                                <img src={person2} alt="person" className="AvatarClass ml-5 "/>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4"><p className="text-white"> Arie, 24 <br/> California</p></div>
                                </div>
                            </div>
                            </div>
                       
                   </div>
                   <div className="col-md-4 col-12 my-3">
                        <div className="card__insight">
                            <div className="cardText">
                                <p style={{height:"455px"}} >
                                “I’m originally from a country that has a very strong culutural stigma against marijuana, however in amsterdam everyone does it everywhere. I wish i could have a human guide that can give me practical unbiased information on cannabis so if i decide to try it out, I know exactly what i’m getting to and the best way to do it the first time.
                                </p>
                            </div>
                            <div className="cardprofile row text-center">
                                <div className="row ml-4 w-100 d-flex align-items-center">
                                <div className="col-md-4 col-sm-4 col-4 ">
                                <img src={person3} alt="person" className="AvatarClass cocl-md-4 ml-5"/>

                                </div>
                                <div className="col-md-4 col-sm-4 col-4 "><p className="text-white"> Jamie,21 <br/> Torronto</p></div>
                                
                            </div></div>
                            </div>
                        </div>
                   </div>
               </div>

               </div>
           </section>

           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>
           {/* Primary concerns section from here */}

        

           <section className="PrimaryConcerns mx-auto pl-5 ">
               <div className="container">
               <div className="row my-5">
                   <div className="col-md-12 text-center primaryConernP my-4">
                        <p >Primary concerns that stood out</p>
                   </div>
               </div>
               </div>
               <div className="container">
               <div className="row my-5 ">
                   <div className="col-md-4 primarybox text-center">
                        <img src={primaryConern1} alt=""/>
                        <p>Experiencing paranoia and other negative emotions </p>
                   </div>
                   <div className="col-md-4 primarybox text-center ">
                        <img src={primaryConern2} height="125px" alt=""/>
                        <p>Experiencing paranoia and other negative emotions </p>
                   </div>
                   <div className="col-md-4 primarybox text-center">
                        <img  src={primaryConern3} height="125px" width="60%" alt=""/>
                        <p>Experiencing paranoia and other negative emotions </p>
                   </div>
               </div>
               </div>
           </section>
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

                
           {/* virtual environment paragraph section starts*/}

           <section className="virtualenvpara pl-3 ml-3">
{/*         
           <div className="sidebtn4 sidebtn text-center d-flex align-items-center">
            <h3 className="text-center">03_Users</h3>
        </div> */}

        


<h3 className="testclass sidebtn4">04- CHALLENGE</h3>


           <div className="concheading ">
                       <h3>The Challenge</h3>
                       </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 ">
                       <h4>
               How do we create a fun virtual environment for people to learn and experience cannabis freely and safely?
               </h4>
                       </div>
                   </div>
               </div>
           </section>
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>
{/* </div>   open this line  */}

               <h3 className="testclass sidebtn5 border-light text-white">05- SOLUTION</h3>
           <section className="purpleBox my-5 my-5 ">
           {/* <div className="sidebtn5  text-center d-flex align-items-center">
            <h3 className="text-center">03_Users</h3>
        </div> */}

        <div className="container">
               <div className="row">
                   <div className="col-md-12 purpleBox">
                <p>Broccoli fosters a more inclusive cannabis community for first time users by hosting live conversations, virtual music concerts and art classes from certified experts </p>

                   </div>
               </div>
               </div>
           </section>
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

           {/* <div className="sidebtn6 sidebtn text-center d-flex align-items-center">
            <h3 className="text-center">06_DESIGN_PROCESS</h3>
        </div> */}

        <h3 className="testclass">06 - Design process</h3>
<div className="container">

           <section className="sketch my-4">
            <h4>Sketches + Ideation </h4>
            <p>The initial idea was to create a cannabis themed music app.</p>

            <div className="row my-3">
                <div className="col-md-4 my-2 paperpic">
                    <img src={paper1} alt="paperimg"/>
                </div>
                <div className="col-md-4 my-2  paperpic ">
                    <img src={paper2} alt="paperimg"/>
                </div>
                <div className="col-md-4 my-2 paperpic ">
                    <img src={paper3} alt="paperimg"/>
                </div>
            </div>

            {/* second row */}

            <div className="row my-5 d-flex align-items-center">
                <div className="col-md-6 anothertext ">
                    <h3>After sketching the userflow i discovered if i took out the cannabis theme it was just like every other music app.</h3>
                </div>
                <div className="col-md-6  ">
                <img src={paper4} alt="paper4"/>
            </div>
            </div>

            {/* third row */}

            <div className="row my-5 d-flex align-items-center">
                <div className="col-md-6  paperpic  my-3">
                    <img src={paper5} alt="paper5"/>
                </div>
                <div className="col-md-6 my-3 thirdrowpara">
                    <p>
                    I decided to conduct another set of interviews to truly understand the unique value I can bring by creating a cannabis app. <br/> <br/>

Based on the interviews, what the ideal users really need 
is a real human being that can guide them safely in the numerous ways to experience cannabis and foster a more 
“legitimate” cannabis community that welcomes everyone especially first-time users and enthusiasts.
                    </p>
                </div>
            </div>
           
           </section>


           {/* Customer journey section starts */}


           <section className="customerJourney">
               <div className="row">
                   <div className="col-md-12 customerjourneypara">
                       <p>
                       Customer Journey Map 
                       </p>
                   </div>
               </div>

               {/* emojis row */}

               <div className="row emojisrow">
                   <div className="col-md-8 d-flex justify-content-around">
                       <img src={happy} alt="happy"/>
                       <img src={thinking} alt="think"/>
                       <img src={curious} alt="cur"/>
                       <img src={angry} alt="angry"/>
                       <img src={calm} alt=""/>
                   </div>
                   
               </div>
               <div className="row my-2">
                   <div className="col-md-8 d-flex justify-content-around">
                   <p>Happy</p> 
                    <p>Thinking</p>     
                    <p>Curious</p>     <p> Angry </p>     <p>Satisfied</p>

                   </div>
                   </div>

                   {/* map row starts */}

            <div className="row">
                <div className="col-md-10 my-5 text-center">
                    <img src={map} className="img-fluid" alt="map" width="100%"/>
                </div>
            </div>
           </section>


           {/* features section starts */}


           <section className="features">
               
            {/* heading row  */}

            <div className="row">
                <div className="col-md-10 features__h3">
                    <h3>Features</h3>
                </div>
            </div>

            {/* row # 2 */}

            <div className="row">
                <div className="col-md-6 col-sm-6 mt-5 row2__feature">
                    <h3>
                    Diverse content to learn and join the cannabis culture
                    </h3>
                    <p>
                    Users can join in the conversation where they can ask experts and other first-time users questions or they can attend virtual cannabis themed concert as well as do an artistic activity inspired by a little bit of weed. 
                    </p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <img src={mobile}  width="100%" alt="mobilepic"/>
                </div>
            </div>

            {/* third row */}

            <div className="row ">
                <div className="col-md-6 col-sm-6 text-center">
                    <img src={mobile2} width="70%"  alt="mobile2"/>
                </div>
                <div className="col-md-6 col-sm-6 mt-5 p-5 thirdrowpara">
                    <h3>Users learn through a social media experience</h3>
                    <p>Users stay engaged because it
feels like they are just on a live stream on instagram</p>
        
                </div>
            </div>


            

           {/* prototype section */}

        <section className="prototypeMain">
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-10 proto-text">
                        <h2>Check out the hi-fidelity prototype <br/> <span style={{color: "#7021FF",borderBottom:"2px solid #7021FF"}} >View Prototype</span> 
</h2>
                    </div>
                </div>
            </div>
               
           </section>

           {/* two last paragraphs */}


           <section className="para1">

           <h3 className="testclass sidebtn7" >05- Conclusion</h3>

               <div className="container">
                   <div className="row my-5">
                       <div className="concheading pl-3">
                       <h3>The Conclusion</h3>
                       </div>
                       <div className="col-md-12 para1text my-5">
                           <h2>
                           The Takeaway
                           </h2>
                           <p className="paratext1p" >
                           This was my first time coming up with a product idea and designing it to high-fidelity. This project made me understand the importance of conducting   user- interviews. It was a lot of guessing for me at first but once i interviewed musicians, college students and everyone interested in the conversation around cannabis the vision became much clearer.
                           </p>
                       </div>
                   </div>
               </div>
           </section>

           <section className="para1">
               <div className="container">
                   <div className="row my-5">
                       <div className="col-md-12 w-100 para1text my-5">
                           <h2>
                           2.0 Aspirations 
                           </h2>
                           <p className="paratext1p" >
                           Create a messaging feature for people to interact with experts 24/7 if they don’t feel comfortable asking questions on the live feed as well as an activity board for people to meetup in real life. For the business point of view, for cannabis businesses to be able to advertise their products on our platform.
                           </p>
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
                <Link  style={{textDecoration:"none"}} to="/paperspace" >
                    <div className="row text-center">
                        <div className="col-md-12  nextprojecttext">
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
