import htmlLogo from "/src/assets/html.svg"
import cssLogo from "/src/assets/css.svg"
import jsLogo from "/src/assets/js.svg"
import bootstrapLogo from "/src/assets/bootstrap.svg"
import sassLogo from "/src/assets/sass.svg"
import typescriptLogo from "/src/assets/typescript.svg"
import reactLogo from "/src/assets/react.svg"
import figmaLogo from "/src/assets/figma.svg"

export default function Technologies() {
    const technologies = [
        {"name": "HTML5", "img": htmlLogo},
        {"name": "CSS3", "img": cssLogo},
        {"name": "JavaScript", "img": jsLogo},
        {"name": "Bootstrap 5", "img": bootstrapLogo},
        {"name": "Sass", "img": sassLogo},
        {"name": "Typescript", "img": typescriptLogo},
        {"name": "React", "img": reactLogo},
        {"name": "Figma", "img": figmaLogo}
    ]

    const techElements = technologies.map(tech => {
        return <div className="col-3 col-md" key={tech.name} ><img src={tech.img} alt={tech.name} title={tech.name + " logo"} /></div>
    })
    
    return (
        <div className="section_technologies">
            <div className="content bg-dark text-light">
                <div className="container">
                    <div className="row technologies-list">
                        {techElements}
                    </div>
                </div>
            </div>
        </div>
    )
}