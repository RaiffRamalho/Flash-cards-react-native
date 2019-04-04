import { 
    RECEIVE_DECKS,
    ADD_DECK, 
    REMOVE_DECKS, 
    ADD_CARD_TO_DECK, 
    INCREMENT_INDEX_OF_CARD,
    ANSWERED_CARD } from '../actions'

export default function decks (state = {}, action) {
  // console.log("state", state)
  // console.log("action", action)
  const {decks} = state
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
            indexOfCurrentQuestion: action.indexUpdated > 0 ? state.decks[action.deckID].indexOfCurrentQuestion + (action.indexUpdated) : 0,
          }
        }
      }
    case ANSWERED_CARD :
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckID]: {
            ...state.decks[action.deckID],
            questions : state.decks[action.deckID].questions.map((item, index) => 
              index !== action.indexOfCurrentQuestion ? item : Object.assign({}, item, { answered: action.answered }))
          }
        }
      }
    default :
      return state
  }
}