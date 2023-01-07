import { Link } from 'react-router-dom';

function Nav( {loggedInUsername} ) {
    console.log(loggedInUsername, "<<<<<<<<<<< loggedInUsername");
    return (
        <nav>
            {loggedInUsername ? null : <Link to="/">Home</Link>}            
            <Link to="/items">Items</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Nav;