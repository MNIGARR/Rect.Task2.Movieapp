import React from 'react'
import './Feedback.css';

export default function FB({feedbacks}) {
  return (
    <div className='fb'>
      {feedbacks.map((f) => (
        <div className='fb-items'>
          <p>{f.username}</p>
          <p >{f.comment}</p>
        </div>
      ))}
    </div>
  )
}
