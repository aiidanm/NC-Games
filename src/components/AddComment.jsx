import { useState } from "react"
import { postComment } from "./api-requests"


const AddComment = ({setComments, review_id}) => {

    const [comment, setComment] = useState("")
    const [postObject, setPostObject] = useState({})


    const handleChange = (e) => {
        setComment(e.target.value)
        setPostObject({body: comment, username: "weegembump"})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setComments((currComments) => [...currComments, {body: comment, author: "weegembump", votes: 0}])
        postComment(review_id, postObject).then((response) => console.log(response)).catch((err) => console.log(err))
    }
    return (
        <form id="commentform" onSubmit={handleSubmit}>
            <input id="commentinput" onChange={handleChange}></input>
            <button type="submit">Place comment</button>
        </form>
    )
}

export default AddComment