import "./Header.css"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header id="main-header">
            <h1>Travel Destination App</h1>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive ? "active-navlink" : null
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/addDestination"
                    className={({ isActive }) => {
                        return isActive ? "active-navlink" : null
                    }}
                >
                    Add a destination
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
