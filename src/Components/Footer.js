import React from 'react';

const footer =(props)=>{
    return(
        <div className="fixed-bottom mt-auto  jumbotron h-20 mb-0">
        <div className="container">
      
        
        
        <ul className="nav justify-content-center">
            <li className="nav-item mx-2">
                <a className="nav-link active text-muted" href="https://github.com/rahulrepal">  <i className="fab fa-github fa-lg"></i></a>
            </li>
  
            <li className="nav-item mx-2">
                 <a className="nav-link text-muted" href="https://www.behance.net/rrepal8f4e7"><i className="fab fa-behance fa-lg"></i></a>
            </li>
  
            <li className="nav-item mx-2">
                <a className="nav-link text-muted" href="https://www.instagram.com/rahulrepal/"><i className="fab fa-instagram fa-lg"></i></a>
            </li>
  
        </ul>
        </div>
        </div>
    )
}

export default footer;