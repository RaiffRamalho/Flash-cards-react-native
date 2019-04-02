export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECKS = 'REMOVE_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const INCREMENT_INDEX_OF_CARD = 'INCREMENT_INDEX_OF_CARD'
export const ANSWERED_CARD = 'ANSWER_CARD'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
} 

export function removeDecks () {
  return {
    type: REMOVE_DECKS
  }
}

export function saveCardToDeck (deckID, card) {
  return {
    type: ADD_CARD_TO_DECK,
    deckID,
    card
  }
}

export function incrementCardIndex (deckID, indexUpdated) {
  return {
    type: INCREMENT_INDEX_OF_CARD,
    deckID,
    indexUpdated
  }
} 

export function saveCardAnswer (deckID, answered) {
  return {
    type: ANSWERED_CARD,
    deckID,
    answered
  }
} 