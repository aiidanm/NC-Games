import { Link } from "react-router-dom"

const HomeButtons = () => {

    return (
        <div className="nav_buttons">
            <Link to="/reviews">
        <button className="nav_button" id="allreviews_button">Reviews</button>
            </Link>
        </div>
    )
}

export default HomeButtons