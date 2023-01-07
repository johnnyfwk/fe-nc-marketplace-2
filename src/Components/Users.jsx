function Users( {allUsers, updateAllUsers, loggedInUsername} ) {   

    console.log(allUsers, "<<<<<<< allUsers");
    console.log(loggedInUsername, "<<<<<<<<<<<< loggedInUsername");

    const renderAllUsers = allUsers.map((user) => {
        return <div key={user.username}>
            <h2>{user.username}</h2>
            <img src={user.avatar_url} alt={user.username}></img>
            <p>Kudos: {user.kudos}</p>
        </div>
    });

    return (
        <div>
            <h1>Users</h1>
            {renderAllUsers}
        </div>
    )
}

export default Users;