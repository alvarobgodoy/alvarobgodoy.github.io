import WebsiteShowcase from "../WebsiteShowcase"
import data from "/src/data/portfolio"

export default function Work() {
    const WebsiteShowcaseElements = data.map((website) => {
        return <div className="col-sm-6" key={website.id}>
            <WebsiteShowcase data={website} />
        </div>
    })
    
    return (
        <div className="section_work bg-dark text-light">
            <div className="container">
                <div className="row row-heading">
                    <p className="subtitle">What I've worked on</p>
                    <h2>Portfolio</h2>
                    <p className="info">With almost 2 years of experience as a web developer these are some of the projects I've actively worked on</p>
                </div>
                <div className="row mb-5">
                    {WebsiteShowcaseElements}
                </div>
            </div>
        </div>
    )
}