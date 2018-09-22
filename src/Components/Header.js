import React from 'react';
import {Link} from 'react-router-dom';

const header =(props)=>{
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" >
                <div className="container mx-2 my-auto">
                    <h1 className="navbar-brand" >
                        MOVIES
                    </h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto mt-2 mt-md-0">
                <li className="nav-item active mx-3">
                    <Link className="nav-link" to="/"> <i className="fas fa-video mx-2"></i> Home </Link>
                </li>

                 <li className="nav-item mx-3">
                    <Link className="nav-link" to="/discover"><i class="fab fa-wpexplorer mx-2"></i>Discover</Link>
                </li>
                
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="/about"><i className="fas fa-user mx-2"></i>About</Link>
                </li>
                
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="/contacts"><i className="fas fa-envelope mx-2"></i>Contact</Link>
                </li>
            </ul>
             
                    </div>
                </div>
                  </nav>
        
        
      
    )
}

export default header;