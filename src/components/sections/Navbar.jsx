export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" aria-label="Offcanvas navbar large">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#section_about">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section_work">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section_contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}