// Use Cases

function createSession() {
    // Precondition: User is on a /watch/ page on Netflix.
    // Extension: User will be removed from existing sessions.
    // 1. User sends a create session request to the server.
    // 2. User provides the server with a clientId.
    // 3. The server joins the user to the session.
    // 4. The server sends information to the user about the session.
}

function joinExistingSession() {
    // Precondition: User has a flixy.org URL.
    // Extension: User will be remove from existing sessions.
    // 1. User sends a join session request to the server with the URL.
    // 2. User provides the server with a clientId.
    // 3. The server joins the user to the session.
    // 4. The server sends information to the user about the session.
}

function leaveSession() {
    // Precondition: User is in a session.
    // 1. User sends a leave session request to the server.
    // 2. The server remove the user from the session.
}

function playVideo() {
    // Precondition: User is in a session.
    // Extension: Results in a syncReceive().
    // 1. User sends a play event to the server.
    // 2. The server broadcasts a sync state to all users.
}

function pauseVideo() {
    // Precondition: User is in a session.
    // Extension: Results in a syncReceive().
    // 1. User sends a pause event to the server.
    // 2. The server broadcasts a sync state to all users.
}

function seekVideo() {
    // Precondition: User is in a session.
    // Extension: Results in a syncReceive().
    // 1. User sends a seek event to the server.
    // 2. The server broadcasts a sync state to all users.
}

function bufferingVideo() {
    // Precondition: User is in a session.
    // 1. User sends a buffering event to the server.
    // 2. The server broadcasts a sync state to all users.
}


function changeVideo() {
    // Precondition: User is in a session.
    // Extension: Results in a syncReceive().
    // 1. The user's video changes.
    // 2. The user sends a change video event to the server.
    // 3. The server broadcasts a sync state to all users.
}

function syncRequest() {
    // Precondition: User is in a session.
    // Extension: Results in syncReceive().
    // 1. The user requests a sync state from the server.
    // 2. This action is repeated every 5 seconds.
}

function syncReceive() {
    // Precondition: User is in a session.
    // Extension: Will result in one of the following client-side events:
    //   i)   Play/pause/seek of current video
    //   ii)  Change to a new video
    //   iii) A message providing information about event that is taking place
    // 1. The user matches the state in their own client.
    // 2. This action is repeated every 5 seconds.
}