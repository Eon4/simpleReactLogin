import { NavLink } from "react-router-dom";


export function Navbar () {
    return(
        <nav>
            <NavLink to= "/login">login</NavLink>
            <NavLink to= "/signup">Sign up</NavLink>

        </nav>
    )

}