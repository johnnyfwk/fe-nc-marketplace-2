import { useState, useEffect } from 'react';

function Home( {allUsers, updateLoggedInUsername} ) {
    const [usernameInput, updateUsernameInput] = useState();
    const [doesUsernameExist, updateDoesUsernameExist] = useState(true);

    useEffect(() => {
        updateLoggedInUsername(null);    
    }, []);

    const existingUsers = allUsers.map((user) => {
        return user.username.toLowerCase();
    })

    function handleSubmit(event) {
        updateDoesUsernameExist(true);
        if (existingUsers.includes(usernameInput)) {
            console.log("User is in the database");
            updateLoggedInUsername(usernameInput);
        }
        else {
            console.log("User is NOT in the database");
            updateDoesUsernameExist(false);
            event.preventDefault();
        }
    }

    return (
        <section>
            <h2>Home</h2>
            <p>Welcome to NC Marketplace, a site where you can buy and sell secondhand stuff.</p>
            <p>Please login to view, buy, and sell stuff.</p>
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