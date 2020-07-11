import React from 'react'

export const GifItem = ({title,url}) => {
    //console.log(id,title,url);
    return (
        <div className="card animate__fadeInUp" >
            <img src={url} alt = {title} />>
            <p>{title}</p>
        </div>
    
    )
}
