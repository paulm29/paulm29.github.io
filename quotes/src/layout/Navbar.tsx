import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../common/context/ThemeContext";
import styled from "styled-components";

const Navbar = () => {
    const theme = useContext(ThemeContext);

    const Navbar = styled.div`
      background-color: white;
      font-size: 18px;
      text-align: center;
      color: black;
    `;

    return (
        <Navbar>
            <NavLink to="/">Home</NavLink>
            &nbsp;
            <Link to="/about">About</Link>
        </Navbar>
    )
}
export default Navbar;
