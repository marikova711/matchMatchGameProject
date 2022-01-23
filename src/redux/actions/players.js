// export function addPlayer(firstName, lastName, email) {
//     return {
//         type: 'ADD_PLAYER',
//         firstName,
//         lastName,
//         email
//     }
// }

export function addPlayer(player) {
    return {
        type: 'ADD_PLAYER',
        payload: player
    }
}

export function setCurrentPlayer(player) {
    return {
        type: 'SET_CURRENT_PLAYER',
        payload: player
    }
}

export function deleteCurrentPlayer() {
    return {
        type: 'DELETE_CURRENT_PLAYER'
    }
}