import React,{Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const Reducer = (state,action) =>
{
    switch(action.type)
    {
        case 'SEARCH_MOVIE':
        return {
            ...state,
            searches:state.movies.filter(
                movie =>
                action.payload!==" " &&action.payload!==""?movie.title.toUpperCase().indexOf(action.payload)!==-1:null
            )

         }

         case 'S_GENRE':
         return {

            ...state,
            searches:state.movies.filter(
                movie =>
                action.payload!==" " &&action.payload!==""&&movie.genre!=null?movie.genre.toUpperCase().indexOf(action.payload)!==-1:null
            )

         }

         case 'S_DIRECTOR':
         return {

            ...state,
            searches:state.movies.filter(
                movie =>
                action.payload!==" " &&action.payload!==""&&movie.director!=null?movie.director.toUpperCase().indexOf(action.payload)!==-1:null
            )

         }

         case 'SET_CINDEX':
        return {
            ...state,
            cIndex:action.payload
        }

        default:
        return state;
    }
};

export class Provider extends Component {
    state=
    {
        searches:[],
        cMovie:[],
        movies:[
            {"title":"His Father's Rifle","year":1914,"director":"Edward LeSaint","cast":"Earle Foxe, Bertram Grassby","genre":"Drama","notes":null}        ],
        cIndex:"His Father's Rifle",
        dispatch:
        (action)=>{
            this.setState(state=>Reducer(state,action))
        }

    };

    componentDidMount(){
        axios.get('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
        .then(res=>this.setState({movies:res.data}))
    }

    render(){
        return(
            <Context.Provider
            value={this.state}
            >
            {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer=Context.Consumer;