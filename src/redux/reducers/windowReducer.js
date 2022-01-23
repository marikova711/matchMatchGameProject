const initialState = {
    startWindow: true,
    homeWindow: false,
    gameWindow: false,
    settingsWindow: false,
    bestResultWindow: false
};

function windowReducer (state = initialState, action) {
    switch(action.type) {
        case 'START_WINDOW': 
            return initialState
        case 'HOME_WINDOW':
            return {
                ...initialState,
                startWindow: false,
                homeWindow: true
            }
        case 'GAME_WINDOW':
            return {
                ...state,
                gameWindow: true
            }
        case 'SETTINGS_WINDOW':
            return {
                ...state,
                settingsWindow: true
            }
        case 'BEST_RESULT_WINDOW':
            return {
                ...state,
                bestResultWindow: true
            }
        default:
            return state;
    }
}

export default windowReducer;