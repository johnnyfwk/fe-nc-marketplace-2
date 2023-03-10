import { Link } from 'react-router-dom';

function Nav( {loggedInUsername} ) {
    return (
        <nav>
            {loggedInUsername ? null : <Link to="/">Home</Link>}            
            <Link to="/items">Items</Link>
            <Link to="/sell-an-item">Sell An Item</Link>
            <Link to="/ordered-items">Ordered Items</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Nav;