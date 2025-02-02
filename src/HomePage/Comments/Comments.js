import React, { useState } from 'react'
import './comment.css'
//import { storage } from '../../firebase/Setup';

function Comments({QueryId}) {

    const [comment, setComment] = useState();

    // const [queryID, setQueryID] = useState("")

    // const answerDoc = doc(storage,"queries",`${QueryId} `)

    // const addAnswer = () => {
    //   try {
    //     await addDoc()
    //   } catch(err) {
    //     alert(err);
    //   }
    // }

  return (
    <div className='comments'>
      <form className='add-comment'>
        <input 
        type='text'
        placeholder='Leave a comment'
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        />
        <button>Comment</button>
      </form>
      <div className='replies'>
        <div className='each-reply'>
          <div className='reply-user-name'>
            <div className='details'>
            <h3>P</h3>
            <div className='mail'>
              <p>pranayacharya2004@gmail.com</p>
            </div>
            </div>
            <div className='date'>
              Posted on: 13-11-2024
            </div>
          </div>
          <div className='reply-text'>
            <p>The style is from any of the matter of div</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
