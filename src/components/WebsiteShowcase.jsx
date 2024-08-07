import { useState } from "react";
import Button from "./Button";

export default function WebsiteShowcase({data}) {
    const modalId = `websiteShowcaseModal-${data.id}`;
    const carouselId = `carouselExample-${data.id}`;

    const techElements = data.technologies.map((tech) => {
        return <img src={`/tech/${tech}`} alt="" key={tech}/>
    })

    return (
        <>
            <div 
                className="website_showcase card text-white" 
                data-bs-toggle="modal" 
                data-bs-target={`#${modalId}`}
                style={{ cursor: "pointer" }}
            >
                <div className="card-img-top">
                    <img src={data.teaserImg} alt={data.name} />
                </div>
                <div className="card-body">
                    <h4>{data.name}</h4>
                    <p className="card-text">{data.teaserDescription}</p>
                    <div className="web-technologies">
                        {techElements}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div 
                className="modal fade text-dark" 
                id={modalId} 
                tabIndex="-1" 
                aria-labelledby={`${modalId}Label`} 
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h4 className="modal-title" id={`${modalId}Label`}>Description</h4>
                            <button 
                                type="button" 
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body bg-dark text-white">
                            <div id={carouselId} className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={data.fullImg1} className="d-block w-100" alt="Slide 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={data.fullImg2} className="d-block w-100" alt="Slide 2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={data.fullImg3} className="d-block w-100" alt="Slide 3" />
                                    </div>
                                </div>
                                <button 
                                    className="carousel-control-prev custom-carousel-control" 
                                    type="button" 
                                    data-bs-target={`#${carouselId}`} 
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button 
                                    className="carousel-control-next custom-carousel-control" 
                                    type="button" 
                                    data-bs-target={`#${carouselId}`} 
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="content">
                                <h3>{data.name} <span>{data.timeWorked} working in the project</span></h3>
                                <div className="web-technologies">
                                    {techElements}
                                </div>
                                <p>{data.fullDescription}</p>
                            </div>
                        </div>
                        <div className="modal-footer bg-dark text-white">
                            <Button link={data.link} type="light">Visit Website</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
