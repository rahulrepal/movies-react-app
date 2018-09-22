import React from 'react';

const about =(props)=>{
    return(
        <div className="container mt-4 pb-5">
            <div className="display-4 text-center ">About</div>
            <p className="lead mt-3">
                Hello Everyone, I am Rahul. I am currently learning React Js and this is the
                 application that I was developing during my learning period
            </p>
            <p className="mt-4">
                This App Uses Json Placeholder to retrieve data related to movies
                from 'www.someurlhere.com' and Styling is done completely with bootstrap<br />
                <span className="text-danger my-2">
                    Make Sure You Have Internet Connection
                </span>
            </p>
            <p>Things That I Have Learnt while developing this app</p>
            <ul className="pb-5">
                <li>React Js</li>
                <li>Routing In React</li>
                <li>Context API</li>
                <li>Axios</li>
            </ul>



        </div>
    )
}

export default about;