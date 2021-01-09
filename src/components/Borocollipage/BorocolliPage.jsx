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
import { TimelineBorocolli } from './TimelineBorocolli';
import { Problemsecborocolli } from './Problemsecborocolli';
import { UserInsightBorocolli } from './UserInsightBorocolli';
import { PrimaryconcernBorocolli } from './PrimaryconcernBorocolli';
import { VirtualparaBorocolli } from './VirtualparaBorocolli';
import { Solution5Borocolli } from './Solution5Borocolli';
import { Lastcomponentborocolli } from './Lastcomponentborocolli';


export const BorocolliPage = () => {
    return (
        <>
        <section className="borocolliPage">
        <Header/>
        <div className="imgDiv">
        <img src={img2} className="img-fluid" alt="borocolliimg"/></div>
        </section>
        <div className="container">

            {/* component1 call starts */}
            <TimelineBorocolli/>

            {/* component1 call ends */}

        <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>


        </div>

       
       {/* component2 call starts */}

       <Problemsecborocolli/>
       {/* component2 call ends */}

      

           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

           {/* component3 call starts */}

           <UserInsightBorocolli/>

           {/* component3 call ends */}

         
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

{/* component4 call starts */}
<PrimaryconcernBorocolli/>


           {/* Primary concerns section from here */}

{/* component4 call ends */}
        

         
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>


{/* compnent5 call starts */}

<VirtualparaBorocolli/>

           {/* virtual environment paragraph section starts*/}

{/* component5 call ends */}
        
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

{/* compnent6 call starts */}

<Solution5Borocolli/>

{/* component6 call ends */}

       
           <div className="space my-5 py-4">
{/* this is for spacing */}
           </div>

          {/* component7 call starts */}

          {/* component7 call ends */}
          <Lastcomponentborocolli/>

            {/* component7callends */}

        </>
    )
}
