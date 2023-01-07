import { Link } from 'react-router-dom';

function Logout( {loggedInUsername} ) {
    return (
        <div>
            <div>Logged in as {loggedInUsername}</div>
            <Link to="/">Logout</Link>
        </div>
    )
}

export default Logout;