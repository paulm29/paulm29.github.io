import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            &nbsp;
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
export default Navbar;
