import React from 'react';
import primaryConern1 from "../../images/primary1.png"
import primaryConern2 from "../../images/primary2.png"
import primaryConern3 from "../../images/primary3.png"


export const PrimaryconcernBorocolli = () => {
    return (
        <>
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
        </>
    )
}
