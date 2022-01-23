const initialState = {
    currentPlayer: null,
    allPlayers: []
}

function playerReducer (state = initialState, action) {
    switch(action.type) {
        case 'ADD_PLAYER': 
            if (state.allPlayers.includes(action.payload)) {
                return state
            } else return {
                ...state,
                allPlayers: [...state.allPlayers, action.payload]
            }
        case 'SET_CURRENT_PLAYER':
            return {
                ...state,
                currentPlayer: action.payload
            }
        case 'DELETE_CURRENT_PLAYER':
            return {
                ...state,
                currentPlayer: null
            }
        default:
            return state;
    }
}

export default playerReducer;