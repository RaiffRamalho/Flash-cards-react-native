import { ADD_CARD  } from '../actions/cards'

export default function decks (state = {}, action) {
  const {card} = action
  switch (action.type) {
    case ADD_CARD :
      const arr = state[card.deckID];
      return {
        ...state,
        [card.deckID]: !arr ? [card]: [card].concat(arr) 
      }
    default :
      return state
  }
}