import { createStore, combineReducers } from 'redux';
import playerReducer from './reducers/playerReducer';
import cardsReducer from './reducers/cardsReducer';
import recordsReducer from './reducers/recordsReducer';
import windowReducer from './reducers/windowReducer';

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {}

const reducers = combineReducers({
    players: playerReducer,
    cards: cardsReducer,
    records: recordsReducer,
    windows: windowReducer
})

const store = createStore(reducers, persistedState);

store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
  })


export default store;