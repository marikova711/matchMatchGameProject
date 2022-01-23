const initialState = [];

function recordsReducer (state = initialState, action) {
    switch(action.type) {
        case 'ADD_RECORD':
            return [...state, action.payload]
        case 'SORT_RECORD':
            const newState = state.sort((a, b) => {
                if(a.minutes > b.minutes || (a.minutes == b.minutes && a.seconds > b.seconds)) {
                    return 1
                }
                if(a.minutes == b.minutes && a.seconds == b.seconds) {
                    return 0
                }
                else {
                    return -1
                }
            })
            return newState.slice(0, 11);
        default:
            return state;
    }
}

export default recordsReducer;