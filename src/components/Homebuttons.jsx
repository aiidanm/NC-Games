import { Link } from "react-router-dom"

const HomeButtons = () => {

    return (
        <div className="nav_buttons">
            <Link to="/games">
        <button className="nav_button" id="allgames_button">All Games</button>
            </Link>
            <Link to="/reviews">
        <button className="nav_button" id="allreviews_button">Reviews</button>
            </Link>
        </div>
    )
}

export default HomeButtons