import React from "react";
//

let Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">
                        <img src="https://www3.gobiernodecanarias.org/medusa/ecoescuela/plantillawiki/files/formidable/12/bandera21.png" alt="Logo" border="" width="30" height="25" className="d-inline-block align-text-bottom me-2" />
                        Buchito de Clipper
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-light" href="#">Team</a>
                            <a className="nav-link text-light" href="#">Games</a>
                            <div class="vr text-light"></div>
                            <a className="nav-link text-light" href="#">Invite Link</a>
                        </div>
                    </div>
                </div>
            </nav>
        
    );
};

export default Navbar;