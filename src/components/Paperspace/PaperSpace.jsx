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
import { Timeline } from './Timeline';
import { Problempaper } from './Problempaper';
import { Solution5 } from './Solution5';
import { Userflowpaper } from './Userflowpaper';
import { Featurespaper } from './Featurespaper';

export const PaperSpace = () => {
    return (
        <>
            <section className="borocolliPage2">
                <Header />
                <div className="imgDiv">
                    <img src={img2} className="img-fluid" alt="borocolliimg" /></div>
            </section>
            <div className="container">

<Timeline/>


                {/* <section className="timeLineSection">
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
 */}
 

            </div>

            <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

           {/* component call1 ends */}

           {/* component call2 starts */}

            {/* Problems section from here */}
            <div className="container">
            {/* <h3 className="testclass papertestchallenge" >01- The Problem</h3> */}

            <Problempaper/>  

              {/* component call2 ends */}
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

  {/* component call3 starts */}


        <Solution5/>

    {/* component call3 ends */}

            <div className="container">



            
                {/* user flow section starts from here */}


              {/* component4  call starts */}
              <Userflowpaper/>
              {/* component4 call ends */}

                {/* features section starts */}

                {/* component5 call start */}

                <Featurespaper/>
                {/* component4 call ends */}


               

            </div>



        </>
    )
}
