import React from 'react';

function Tweet({name, message, likes}){
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h4>Number of likes: {likes}</h4>
        </div>
    )
}

export default Tweet;