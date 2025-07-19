import React, { useState } from 'react'
import './mymodal.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { storage } from '../../firebase/Setup';
import { auth, db } from '../../firebase/Setup';
import { get, ref } from 'firebase/database';


function MyModal({ toggleModal, modal, getQuery }) {

    const [post, setPost] = useState("");

    const queryRef = collection(storage, "queries");

    const addQuery = async () => {
        const user = auth.currentUser;
        const uid = user.uid;
        const usernameRef = ref(db, `UserRegistrationList/${uid}/name`)
        try {
            const snapshot = await get(usernameRef);
            const username = snapshot.exists() ? snapshot.val() : "anonymous"
            if (post !== "") {
                addDoc(queryRef, {
                    query: post,
                    createdAt: serverTimestamp(),
                    email: user.email,
                    username: username
                }).then(() => {
                    setPost("")
                    getQuery()
                    toggleModal(modal);
                }).catch((err) => {
                    alert(err)
                })
            } else {
                alert(`Please enter your query`)
                return
            }
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <div className='modal-head'>
                            <h3>Hey, what's on your mind ✏️</h3>
                            <button className='close-modal' onClick={toggleModal}>Close</button>
                        </div>
                        <div className='post-box'>
                            <p>Write down your query here 👇</p>
                            <textarea
                                placeholder='write here...'
                                value={post}
                                onChange={(e) => setPost(e.target.value)}
                            ></textarea>
                            <button onClick={addQuery}>Post Question</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MyModal



