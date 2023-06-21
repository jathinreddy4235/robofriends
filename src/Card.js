import React from 'react';


const Card  = (props) =>{
    return (
        <div className='bg-blue-200 rounded-lg italic font-bold hover:scale-95 hover:bg-blue-100 '>
            <img src={"https://robohash.org/"+props.id}></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.mail}</p>
            </div>
        </div>
    );
}

export default Card;