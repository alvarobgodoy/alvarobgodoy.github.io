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
                        <h6>Dario Godoy</h6>
                        <p>"Always a student at BYU-Idaho, majoring in Applied Technology. I've completed two certificates."</p>
                        <Button link="#" type="link-dark">Lead Developer @ GCD</Button>
                    </div>
                    <div className="col-sm-6">
                        <img className="icon" src={PersonIcon} alt="Person Icon" />
                        <h6>Kelly Bell</h6>
                        <p>"Always a student at BYU-Idaho, majoring in Applied Technology. I've completed two certificates."</p>
                        <Button link="#" type="link-dark">CTO @ GCD</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}