import React, {Component} from 'react';
import {Consumer} from '../../context';
class movies extends Component{
 

    render(){
        return(
            <Consumer>
            {
                value =>{
                    const {movies,cIndex} = value;
                    const yxa=movies.filter(
                        movie =>
                        movie.title===cIndex
                    )
                    /*const xyz=yxa.map(
                        movie =>
                        <div className=" mt-4">
                            <h3 className="text-center">{movie.title}</h3>
                        </div>
                    )*/

                    const {title,year,director,cast,genre} = yxa[0];
                   
                    


                    return(
                        <React.Fragment>
                        <div className="mt-4 text-center">
                            <h3>{title}</h3>
                            <ul className="list-unstyled">
                                <li>Genre : {genre}</li>
                                <li>Year : {year}</li>
                                <li>Director : {director}</li>
                                <li>Cast : {cast}</li>
                            </ul>
                        </div>
                        </React.Fragment>
                    )
                }
            }
            </Consumer>
        )
    }
}

export default movies;