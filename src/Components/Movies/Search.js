import React,{Component} from 'react';
import { Consumer } from '../../context';

class search extends Component{
    state={
        sname:""
    }
    searchHandler=(dispatch)=>{
        //console.log("button pressed with"+this.state.sname)
        dispatch({type:'SEARCH_MOVIE',payload:this.state.sname})

    }
    serachChangeHandler=(dispatch,e)=>{
        this.setState({sname:e.target.value.toUpperCase()});
        dispatch({type:'SEARCH_MOVIE',payload:this.state.sname})

        //this.setState({sname:e.target.value});

       

        //

    }
    setCurrentIndexHandler=(title,dispatch)=>{
        this.setState({sname:""});
        dispatch({type:'SET_CINDEX',payload:title})

        
        //this.searchHandler(dispatch)

    }

   
    render(){
        return(

            <Consumer>
                {
                    value =>{
                        const{dispatch,searches} =value;
                       const searchList = searches.slice(0,3).map(
                            r=>
                           (
                               <li className="list-group-item"
                               onClick={this.setCurrentIndexHandler.bind(this,r.title,dispatch)}
                               key={r.id}>{r.title}</li>
                           )
                        );
                        return (
                            <React.Fragment>
                              
                            <div className="input-group">
                                <input 
                                type="text"
                                name="search"
                                placeholder="Search By Movie Name"
                                className="form-control"
                                aria-label="search here"
                                aria-describedby="btn2"
                                onChange={this.serachChangeHandler.bind(this,dispatch)}
                                />
                            <div className="input-group-append">
                            <button
                            className="btn btn-light"
                            id="btn2"
                            type="button"
                            onClick={this.searchHandler.bind(this,dispatch)}
                            >
                            Search
                            </button>
                            </div>                
                            </div>
                           
                            <ul className="list-group list-group-flush">
                                {searchList}

                            </ul>
                        
              
                
                        </React.Fragment>
                 
                        )

                    }
                }
            </Consumer>
           
           
        )
    }
}

export default search;