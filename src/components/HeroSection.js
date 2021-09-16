import React from 'react'
import './HeroSection.css'
import {Button} from './Button'
import vid from '../assets/videos/video-1.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={vid} autoPlay loop muted />
            <h1>Aventure Await</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">Watch Trailer <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection
