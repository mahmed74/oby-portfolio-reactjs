import React from 'react'
// importing mobile images
import mobile_pink1 from "../../images/mobile_pink1.png"
import mobile_pink2 from "../../images/mobile_pink2.png"
// importing devflow image
import devflow from "../../images/Devflow.png";
// importing link dom
import {Link} from "react-router-dom";

export const Featurespaper = () => {
    return (
        <div>
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
    )
}
