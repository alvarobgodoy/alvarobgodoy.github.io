import { useEffect } from "react"
import avatar from "/src/assets/avatar.png"
import emoji from "/src/assets/waving-emoji.png"
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
                                <h1 className="text text-under-blended section-title-1">
                                    <span className="hi-container"><span className="hi">Hi</span>
                                    <img src={emoji} alt="Waving Emoji Apple" />
                                    </span>
                                    <span className="my-name">I'm Álvaro!</span>
                                </h1>
                                <div className="text text-under text-under-overlay section-title-1">
                                    <span className="hi-container"><span className="hi">Hi</span>
                                    <img src={emoji} alt="Waving Emoji Apple" />
                                    </span>
                                    <span className="my-name">I'm Álvaro!</span>
                                </div>
                            </div>
                        </div>
                        <p className="section-title-2 subtitle">Web Developer & UX/UI Designer</p>
                        <Button link="#section_contact" type="dark">Get in touch</Button>
                        <Button link="/alvaro-resume.pdf" download type="link-dark">Download CV</Button>
                    </div>
                    <img className="avatar" src={avatar} alt="Avatar" />
                </div>
            </section>
        </>
    )
}