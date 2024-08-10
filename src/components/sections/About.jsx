import Button from "../Button"
import CheckImg from "/src/assets/check.svg"
import ConsoleImg from "/src/assets/console.png"

export default function About() {
    return (
        <div className="section_about">
            <div className="container">
                <div className="row first-row">
                    <div className="col-md-6">
                        <p className="subtitle">Get to know</p>
                        <h2>About Me</h2>
                        <p>My self-motivation and productive habits allow me to work remotely, always delivering quality work and doing it on time.  I had the opportunity to work for US-based clients for almost 1 year. I used technologies such as Sass, Bootstrap, Jquery, Drupal...</p>
                        <Button link="#" type="primary">See portfolio</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={ConsoleImg} alt="Console Image" className="img-fluid console" />
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-sm-4">
                        <img className="icon" src={CheckImg} alt="Check" />
                        <h4>Availability</h4>
                        <p>My self-motivation and productive habits allow me to work remotely, always delivering quality work and doing it on time.</p>
                    </div>
                    <div className="col-sm-4">
                        <img className="icon" src={CheckImg} alt="Check" />
                        <h4>Education</h4>
                        <p>I'm a student at BYU-Idaho, majoring in Applied Technology. I've completed two certificates: Web & Computer Programming and Web Development.</p>
                    </div>
                    <div className="col-sm-4">
                        <img className="icon" src={CheckImg} alt="Check" />
                        <h4>Experience</h4>
                        <p>I had the opportunity to work for US-based clients for almost 1 year. I used technologies such as Sass, Bootstrap, Jquery, Drupal...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}