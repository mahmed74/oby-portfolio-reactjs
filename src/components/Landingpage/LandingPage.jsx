import React from 'react'
import { Footer } from '../../utilises/Footer'
import {Header} from "../../utilises/Header"
import { LandingpageBody } from './LandingpageBody'
import bgvideo from "../../video/bg.mp4"

export const LandingPage = () => {
    return (
        <>
        <section className="bgvid w-100 text-center" style={{height:"60vh"}}>
            <video src={bgvideo} className="img-fluid"  width="10000000rem" height="500rem"  muted autoPlay loop ></video>
        </section>
        <Header/>
        <LandingpageBody/>
        <Footer/>
        </>
    )
}
