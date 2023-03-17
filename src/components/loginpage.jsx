import { useContext } from "react"
import { userContext } from "../contexts/user"
import { Link } from "react-router-dom"

const Login = () => {

    const {setUser} = useContext(userContext)


    const handleClick = (e) => {
        setUser((currUser) => {
            if(currUser === "weegembump"){
                return null
            } else {
                return "weegembump"
            }
        })
    } 

    return (
        <div className="login_container"> 
            <h2>Login to NC GAMES</h2>
            <Link to={"/home"}>
            <button onClick={handleClick} id="loginbutton">Login</button>
            </Link>
            

        </div>

    )
}

export default Login