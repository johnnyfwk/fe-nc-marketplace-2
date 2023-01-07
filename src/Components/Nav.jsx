import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
        </nav>
    )
}

export default Nav;