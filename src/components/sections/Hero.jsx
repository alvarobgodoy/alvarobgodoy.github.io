import { useEffect } from "react"
import avatar from "/src/assets/avatar.png"
import Gradient from "/src/scripts/Gradient"

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
                        <a href="#" className='btn btn-dark'>Get in touch</a>
                        <a href="#" className="btn btn-link-dark">See portfolio</a>
                    </div>
                    <img className="avatar" src={avatar} alt="Avatar" />
                </div>
            </section>
        </>
    )
}