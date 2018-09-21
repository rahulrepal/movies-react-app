import React from 'react';
import {Link} from 'react-router-dom';

const header =(props)=>{
    return(
        
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
  
  
                <a className="navbar-brand" href="#">Movies</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-md-0">
                        <li className="nav-item active mx-3">
                            <Link className="nav-link" to="/"> <i className="fas fa-video mx-2"></i> Home </Link>
                        </li>
                        
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/about"><i className="fas fa-user mx-2"></i>About</Link>
                        </li>
                        
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/contacts"><i className="fas fa-envelope mx-2"></i>Contact</Link>
                        </li>
                    </ul>
    
                </div>
            </nav>
      
    )
}

export default header;