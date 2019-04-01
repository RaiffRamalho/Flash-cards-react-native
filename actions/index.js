export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECKS = 'REMOVE_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

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