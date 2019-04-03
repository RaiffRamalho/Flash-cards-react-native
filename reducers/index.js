import { 
    RECEIVE_DECKS,
    ADD_DECK, 
    REMOVE_DECKS, 
    ADD_CARD_TO_DECK, 
    INCREMENT_INDEX_OF_CARD,
    ANSWER_CARD } from '../actions'

export default function decks (state = {}, action) {
  // console.log("state", state)
  // console.log("action", action)
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        decks: {...state.decks, ...action.decks},
      }
    case ADD_DECK :
      return {
        ...state,
        decks: {...state.decks, ...action.deck},
      }
    case REMOVE_DECKS :
      return {}
    case ADD_CARD_TO_DECK :
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckID]: {
            ...state.decks[action.deckID],
            questions: [...state.decks[action.deckID].questions, action.card]
          }
        }
      }
    case INCREMENT_INDEX_OF_CARD :
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckID]: {
            ...state.decks[action.deckID],
            indexOfCurrentQuestion: state.decks[action.deckID].indexOfCurrentQuestion + 1,
          }
        }
      }
    default :
      return state
  }
}