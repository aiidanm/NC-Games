import { useState } from "react"


const AddComment = ({setComments}) => {

    const [comment, setComment] = useState()


    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComments((currComments) => [...currComments, comment])
        
    }
    return (
        <form id="commentform" onSubmit={handleSubmit}>
            <input id="commentinput" onChange={handleChange}></input>
            <button type="submit">Place comment</button>
        </form>
    )
}

export default AddComment