import React, { Component } from 'react';
import { Consumer } from '../../context';
import {Link} from 'react-router-dom';
class discover extends Component {
    state={
        sname:"",
        val:"",
        cShow:5
    }

    searchHandler=(dispatch)=>{
        console.log("button pressed with"+this.state.sname+" val "+this.state.val)
        dispatch({type:'SEARCH_MOVIE',payload:this.state.sname})
        switch(this.state.val.toLowerCase())
        {
            case "year":
            dispatch({type:'S_YEAR',payload:this.state.sname})
            break;

            case "genre":
            dispatch({type:'S_GENRE',payload:this.state.sname})
            break;

            case "director":
            dispatch({type:'S_DIRECTOR',payload:this.state.sname})
            break;

            default:
            dispatch({type:'SEARCH_MOVIE',payload:this.state.sname})
            break;




        }
      

    }
    showMoreHandler=()=>{
        let curr=this.state.cShow*2;
        this.setState({cShow:curr})
    }
    showLessHandler=()=>{
        //let curr=this.state.cShow*2;
        this.setState({cShow:5})

    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value.toUpperCase()});
    }
    setCurrentIndexHandler=(title,dispatch)=>{
        this.setState({sname:""});
        dispatch({type:'SET_CINDEX',payload:title})
        dispatch({type:'SEARCH_MOVIE',payload:this.state.sname})

        
        //this.searchHandler(dispatch)

    }
    render() {
    return (
        <Consumer>
            {
                value=>{

                    const {searches,dispatch} = value;

                    const searchList = searches.slice(0,this.state.cShow).map(
                        r=>
                       (
                           <li className="list-group-item"
                           onClick={this.setCurrentIndexHandler.bind(this,r.title,dispatch)}
                           key={r.id}>
                           <Link className="text-secondary" to="/">{r.title}</Link></li>
                       )
                    );

                    return(
                        <div className="container pb-5">
                            <div className="display-4 my-3">Discover</div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                <select id="inputState" name="val" 
                                onChange={this.handleChange}
                                class="form-control bg-light ">
                                    <option selected>Search By</option>
                                   
                                    <option value="genre">Genre</option>
                                    <option value="director">Director</option>
                                    </select>
                                </div>
                             <input type="text" 
                            onChange={this.handleChange}
                            name="sname"
                            value={this.state.sname}
                             class="form-control" placeholder={this.state.val} aria-label="Text input with dropdown button" />
                            </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-secondary mb-2"
                            onClick={this.searchHandler.bind(this,dispatch)}
                            ><i className="fab fa-wpexplorer mx-2"></i>Discover</button>
                            </div>
                            <ul className="list-group list-group-flush">
                                {searchList}

                            </ul>
                            <button type="button"
                            onClick={this.showMoreHandler}
                            class="btn btn-link pb-5">Show More</button>
                            <button type="button"
                            onClick={this.showLessHandler}
                            class="btn btn-link pb-5">Show Less</button>
                            <div className="pb-5"></div>
                            <div className="mb-5"></div>
                            <div className="mb-5"></div>
                        
                        </div>
                    )
                }
            }
        </Consumer>

    )
  }
}

export default discover;
