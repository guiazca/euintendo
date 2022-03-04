import React, { useState } from 'react'
import { auth, db } from '../../firebase'
import { Textarea, Button } from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import moment from 'moment'
import styles from "../../pages/Detail/Image.module.css"



export default function NewComment(gameID){
    const [comment, setComment] = useState("");

  
    let user = auth.currentUser;

    const commentsCollectionRef = collection(db, "comments")
    

    const createComment = async () => {
        await addDoc(commentsCollectionRef, { 
            gameID: gameID.gameID.id,
            user: user.displayName ,
            comment: comment,
            date: moment(Date.now()).format('DD/MM/YYYY, hh:mm:ss')
         });
        setComment("")
      };
  
    return ( 
        <>
            <div className={styles.textArea}>
                <Textarea placeholder='Here is a sample placeholder'
                mb={"2"}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <Button colorScheme='teal' size='md'
                    onClick={() => createComment( comment, gameID)}
                    id="ButtonSave"
                >
                    Send
                </Button>
            </div>
            
        </>
    )
}
