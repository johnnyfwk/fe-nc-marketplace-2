import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home( {allUsers, updateLoggedInUsername} ) {
    const [usernameInput, updateUsernameInput] = useState("");
    const [doesUsernameExist, updateDoesUsernameExist] = useState(true);

    useEffect(() => {
        updateLoggedInUsername(null);    
    }, []);

    const existingUsers = allUsers.map((user) => {
        return user.username;
    })

    function handleSubmit(event) {
        updateDoesUsernameExist(true);
        if (existingUsers.includes(usernameInput)) {
            updateLoggedInUsername(usernameInput);
        }
        else {
            updateDoesUsernameExist(false);
            event.preventDefault();
        }
    }

    return (
        <section>
            <h2>Home</h2>
            <p>Welcome to NC Marketplace, a site where you can buy and sell secondhand stuff.</p>
            <p>If you are new to the site, you need to <Link to="/create-an-account">create an account</Link> to view, buy or sell goods.</p>
            <p>If you already have an account, please login below.</p>
            <form onSubmit={handleSubmit} action="/items">
                {doesUsernameExist ? null : <p id="username-does-not-exist">Username does not exist.</p>}
                <label htmlFor="username">Enter your username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(event) => {updateUsernameInput(event.target.value)}}
                    required>
                </input>
                <button>Login</button>
            </form>
        </section>
    )
}

export default Home;