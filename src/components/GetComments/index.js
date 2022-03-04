
import React, { useEffect, useState } from 'react'
import { collection, getDocs, onSnapshot, orderBy } from "firebase/firestore"
import "./styles.css"

import { db } from '../../firebase'

export default function GetComment(gameID) {
    const commentsCollectionRef = collection(db, "comments")
    const [comment, setComment] = useState([])


    // useEffect(() => {
    //     const getComments = async() => {
    //         const data = await getDocs(commentsCollectionRef);
    //         // console.log(data)
    //         setComment(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }
    //      getComments()
    // }, [])

    useEffect(() => {
        (async() => {
            onSnapshot(collection(db,"comments"), (doc) => {
                const comment = doc.docs.map((doc) => doc.data())
                setComment(comment)

            })
        })()
    }, [])
    const commentThis = comment.filter(comment => comment.gameID === gameID.gameID.id)
    // console.log(comment)
    return (
        <>
            {commentThis.map((_,i) => {
                return (
                    <div className='comment'>
                        <h1 className='commentTitle'>{commentThis[i].user} - {commentThis[i].date}</h1>
                        <p>{commentThis[i].comment}</p>
                    </div>
                    
                )
    })}
        
        </>
    )
}
