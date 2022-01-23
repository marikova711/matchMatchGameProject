import Earth from 'images/earth.png';
import Moon from 'images/moon.png';
import Sun from 'images/sun.png';
import Saturn from 'images/saturn.png';
import Neptune from 'images/neptune.png';
import Mars from 'images/mars.png';
import Jupiter from 'images/jupiter.png';
import Venus from 'images/venus.png';

const initialState = {
    cardImages: [
        { src: Earth, isMatched: false},
        { src: Moon, isMatched: false},
        { src: Sun, isMatched: false},
        { src: Saturn, isMatched: false},
    ]
};

function cardsReducer(state = initialState, action) {
    switch(action.type){
        case 'EASY_LEVEL':
            return {
                ...state,
                cardImages: initialState.cardImages
            }
        case 'MIDDLE_LEVEL':
            return {
                ...state, 
                cardImages: initialState.cardImages.concat({src: Neptune, isMatched: false}, { src: Mars, isMatched: false})
            }
         case 'HARD_LEVEL':
            return {
                ...state, 
                cardImages: initialState.cardImages.concat({src: Neptune, isMatched: false}, { src: Mars, isMatched: false}, {src: Jupiter, isMatched: false}, { src: Venus, isMatched: false})
            }
        default:
            return state;
    }
}

export default cardsReducer;