import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is test one',
            rating: 5
        },
        {
            id: 2,
            text: 'This is test two',
            rating: 1
        },
        {
            id: 3,
            text: 'This is test three',
            rating: 2
        },
        {
            id: 4,
            text: 'This is test four',
            rating: 3
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit :false
    })
//Feedback Delete
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        }
//Feedback add
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
//Set item to be edit
    const editFeedback = (item) => {    
        setFeedbackEdit({     
            item,
            edit:true
        })
    }

// Update Feedback item 

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item ))
        )
    }

    return <FeedbackContext.Provider value= {{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
                
            }}>{ children }
        </FeedbackContext.Provider>
}

export default FeedbackContext