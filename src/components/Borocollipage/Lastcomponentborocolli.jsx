import React from 'react'
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
import {Link} from "react-router-dom";

export const Lastcomponentborocolli = () => {
    return (
        <>
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
