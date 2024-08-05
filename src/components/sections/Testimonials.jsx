import Button from "../Button"
import PersonIcon from "/src/assets/person-icon.svg"

export default function Testimonials() {
    return (
        <div className="section_testimonials">
            <div className="container">
                <div className="row first-row">
                    <div className="col-12">
                        <p className="subtitle">Testimonials</p>
                        <h2>People I have worked with</h2>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-sm-6">
                        <img className="icon" src={PersonIcon} alt="Person Icon" />
                        <h6>Dario Godoy <span>Lead Developer @ GCD</span></h6>
                        <p>"Always a student at BYU-Idaho, majoring in Applied Technology. I've completed two certificates."</p>
                        <Button link="https://www.linkedin.com/in/dario-godoy-b870a6b/" type="link-dark">See LinkedIn</Button>
                    </div>
                    <div className="col-sm-6">
                        <img className="icon" src={PersonIcon} alt="Person Icon" />
                        <h6>Kelly Bell <span>Founder & CTO @ GCD</span></h6>
                        <p>"Álvaro Rodriguez was a very highly valued employee of Gotham City Drupal in his capacity as both designer and front end developer. He came to us fresh out of school, but we never would have known that. I have 30 years of development and design experience myself and I was so impressed with Álvaro's professionalism..."</p>
                        <Button link="https://www.linkedin.com/in/kellybell/" type="link-dark">See LinkedIn</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}