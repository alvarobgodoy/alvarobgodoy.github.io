import { useEffect } from "react"
import avatar from "/src/assets/avatar.png"
import Gradient from "/src/scripts/Gradient"
import Button from "../Button"

export default function Hero() {
    useEffect(() => {
        Gradient.initGradient('#gradient-canvas');
    }, [])
    
    return (
        <>
            <canvas id="gradient-canvas" style={{width: "100%", height: "800px", zIndex: "-99999"}}></canvas>  
            <section className="section_top">
                <div className="section-container container position-relative">
                    <div className="section-layout">
                        <div className="gradient-area">
                            <div className="gradient-title-area">
                                <h1 className="text text-under-blended section-title-1">Hi, <br /> I'm Álvaro!</h1>
                                <div className="text text-under text-under-overlay section-title-1">Hi <br /> I'm Alvaro</div>
                            </div>
                        </div>
                        <p className="section-title-2 subtitle">Web Developer & UX/UI Designer</p>
                        <Button link="#" type="dark">Get in touch</Button>
                        <Button link="#" type="link-dark">Download CV</Button>
                    </div>
                    <img className="avatar" src={avatar} alt="Avatar" />
                </div>
            </section>
        </>
    )
}