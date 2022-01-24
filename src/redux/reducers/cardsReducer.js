import Earth from 'images/earth.png';
import Moon from 'images/moon.png';
import Sun from 'images/sun.png';
import Saturn from 'images/saturn.png';
import Neptune from 'images/neptune.png';
import Mars from 'images/mars.png';
import Jupiter from 'images/jupiter.png';
import Venus from 'images/venus.png';
import Galaxy from 'images/galaxy.jpg';
import DarkSky from 'images/darksky.jpg';
import Space from 'images/space.jpg';
import StarSky from 'images/starsky.jpg';

const initialState = {
    currentCardBack: Galaxy,
    cardBackImages: [Galaxy, DarkSky, Space, StarSky],
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
        case 'SET_CURRENT_CARDBACK':
            return {
                ...state,
                currentCardBack: action.payload
            }
        default:
            return state;
    }
}

export default cardsReducer;