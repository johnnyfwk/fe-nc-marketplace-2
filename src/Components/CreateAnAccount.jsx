import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as api from '../api';

function CreateAnAccount() {
    const [newUsernameInput, updateNewUsernameInput] = useState( "" );
    const [isUsernameAvailable, updateIsUsernameAvailable] = useState( null );
    const [existingUsers, updateExistingUsers] = useState( [] );
    const [avatarURL, updateAvatarUrl] = useState("");

    useEffect(() => {
        api.getUsers()
            .then((users) => {
                updateExistingUsers(users);
            })
    }, []);

    const existingUsersAsArray = existingUsers.map((user) => {
        return user.username.toLowerCase();
    })

    useEffect(() => {
        if (!existingUsersAsArray.includes(newUsernameInput)) {
            updateIsUsernameAvailable(true);
        }
        else {
            updateIsUsernameAvailable(false);
        }
    }, [newUsernameInput]);

    function handleSubmit(event) {
        if (isUsernameAvailable) {
            api.postUser( {"username": newUsernameInput, "avatar_url": avatarURL} )
                .then((response) => {
                    console.log(response, "<<<<<<<<<<< response");
                })
        }
        else {
            event.preventDefault();
        }
    }

    function handleNewUsernameInput(event) {
        updateNewUsernameInput(event.target.value);
    }

    function handleAvatarUrlInput(event) {
        updateAvatarUrl(event.target.value)
    }

    return (
        <div>
            <h1>Create An Account</h1>
            <p>Enter the details below to create an account.</p>
            <p>If you already have an account, you can log in <Link to="/">here</Link>.</p>

            <form onSubmit={handleSubmit} id="form-create-an-account" action="/items">
                <label htmlFor="new-username">Enter a username: </label>
                <input
                    type="text"
                    id="new-username"
                    name="new-username"
                    onChange={handleNewUsernameInput}
                    required>
                </input>
                {!newUsernameInput ? null
                    : isUsernameAvailable ? <span id="username-is-available">Username is available</span> : <span id="username-is-not-available">Username is not available</span>}

                <br />
                <br />

                <label htmlFor="new-avatar-url">Enter avatar image URL: </label>
                <input
                    type="text"
                    id="new-avatar-url"
                    name="new-avatar-url"
                    placeholder="https://www.example.com/image"
                    onChange={handleAvatarUrlInput}
                    required>
                </input>

                <br />
                <br />

                <button>Create Account</button>
            </form>
        </div>        
    )
}

export default CreateAnAccount;