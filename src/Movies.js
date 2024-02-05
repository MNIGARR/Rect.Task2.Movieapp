import React from 'react';


export default function Movies({movie}) {
  return (
    < >
    <div className='Movie-img'  style={{display: 'flex'}}>
        <img style={{width:"25.5%", height: "127em"}} src={movie.imageUrl} alt={movie.name}></img>
        

        <div >
        <span style={{fontSize: "5em"}}><br></br>Name: </span>
        <span style={{fontSize: "5em"}}>{movie.name}</span>
        <span style={{fontSize: "5em"}}><br></br>Description: </span>
        <span className="m-2" style={{fontSize: "5em"}}>{movie.description}</span>
        <span style={{fontSize: "5em"}}><br></br>Director: </span>
        <span className="m-2" style={{fontSize: "5em"}}>{movie.director}</span>
        <span style={{fontSize: "5em"}}><br></br>Genre: </span>
        <span className="m-2" style={{fontSize: "5em"}}>{movie.genre}</span>
      </div>
      
    </div>      
    </>
  )
}

