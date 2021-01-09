import React from 'react'
import { Header } from '../../utilises/Header';
import "./Playground.css";
// importing gallary pics
// import pic1 from "../images/gallary/pic1.png";
import pic1 from "../../images/gif/monalisa.gif";
import pic2 from "../../images/gallary/pic2.png";
// import pic2 from "../images/";
import pic3 from "../../images/gif/Lovesick.gif";
// import pic4 from "../images/gallary/pic4.png";
import pic4 from "../../images/gif/boyandgirl.gif";
// import pic5 from "../images/gallary/pic5.png";
import pic5 from "../../images/gif/You'rearemix.gif";
// import pic6 from "../images/gallary/pic6.png";
import pic6 from "../../images/gif/Endsarz.gif";
import pic7 from "../../images/gallary/pic7.png";
import { Footer } from '../../utilises/Footer';


export const Playground = () => {
    return (
        <div>
            <Header/>
            {/* playground body starts from here */}

            <section className="playgroundbody my-5">
                {/* paragraph starts */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 playgroundpara">
                            <p>
                            Welcome to my playground! (Fun  and experimental personal projects)
                            </p>
                        </div>
                    </div>
                </div>
                {/* paragraph ends */}
                {/* image gallary starts */}

                <section className="gallary w-100">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-4">
                                <img src={pic1} className="img-fluid my-2"  alt="pic1"/>
                            </div>
                            <div className="col-md-4">
                                <img src={pic2} className="img-fluid my-2" alt="pic2"/>
                            </div>
                            <div className="col-md-4">
                                <img src={pic3} className="img-fluid my-2" alt="pic3"/>
                            </div>
                            {/* row1 ends */}

                        </div>
                        {/* container 1 ends */}
                        <div className="container">
                            <div className="row text-center my-3 ">
                                <div className="col-md-8">
                                    <img src={pic4} className="img-fluid my-2" alt="pic4"/>
                                </div>
                                <div className="col-md-4">
                                <img src={pic5} className="img-fluid my-2" alt="pic5"/>

                                </div>
                            </div>
                            {/* row2 ends */}
                        </div>
                        {/* container 2 ends */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                <img src={pic6} className="img-fluid my-2" alt="pic6"/>
                                </div>
                                <div className="col-md-8">
                                <img src={pic7} className="img-fluid my-2" alt="pic7"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* image gallary ends */}
            </section>

            {/* playground body ends here */}

            {/* footer starts */}
            <Footer/>
            {/* footer ends */}
        </div>
    )
}
