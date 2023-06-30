import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            &nbsp;
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
export default Navbar;
