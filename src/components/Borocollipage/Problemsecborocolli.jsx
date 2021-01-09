import React from 'react';
import image1 from "../../images/image1.png"
import image2 from "../../images/image2.png"
import image3 from "../../images/image3.png"
// importing personicon from mui
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';


export const Problemsecborocolli = () => {
    return (
        <>
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
        </>
    )
}
