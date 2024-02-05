import React from 'react'
import Movies from './Movies'

export default function Main({movies}) {
  return (
    <div>   
      {movies.map((m ) => (
        <Movies movie={m}></Movies>
      ))}
    </div>
  )
}
