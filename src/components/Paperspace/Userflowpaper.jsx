import React from 'react'
import userflow from "../../images/userflow.JPG"


export const Userflowpaper = () => {
    return (
        <div>
              <section className="userflowmain my-5" >
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img src={userflow}  className="img-fluid w-100 h-100" alt="userflow"/>
                            </div>
                        </div>
                    </div>

                </section>

        </div>
    )
}
