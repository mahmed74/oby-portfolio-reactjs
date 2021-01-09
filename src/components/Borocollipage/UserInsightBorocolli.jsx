import React from 'react'
import person from "../../images/person.png"
import person2 from "../../images/person2.png"
import person3 from "../../images/person3.png"


export const UserInsightBorocolli = () => {
    return (
        <>
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

        </>
    )
}
