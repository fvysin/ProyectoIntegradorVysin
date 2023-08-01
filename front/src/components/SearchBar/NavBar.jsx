import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav ({onSearch}){
    return(
        <div>
            <SearchBar onSearch = {onSearch}/>
           
            <Link to='/about'> 
           <button>  About </button>
            </Link>
        
            <NavLink to='/home'> 
            <button>Home</button>
            </NavLink>


        </div>

    )
}

