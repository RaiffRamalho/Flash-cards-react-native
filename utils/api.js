
import { AsyncStorage } from 'react-native'
import { FLASH_CARDS_STORAGE_KEY } from './constants'

export function getDecks (){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY).then(result => JSON.parse(result))
}
export function getDeck (key){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
  .then(results => JSON.parse(results)[key])
}

export function saveDeckTitle ({ key }){
  return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify({
    [key]: {
      title: key,
      questions: [],
      indexOfCurrentQuestion: 0
    }
  }))
}

export function getCards (){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY).then(result => JSON.parse(result))
}


export function addCardToDeck ({ key, card }){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
  .then(results => {

    let data = JSON.parse(results)[key]
    data.questions.push(card)
    
    AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify({[key]:data}))
    .then(result => JSON.parse(result))
  
  })
  
}

export function incrementIndex ({ key, index }){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
  .then(results => {

    let data = JSON.parse(results)[key]
    data.indexOfCurrentQuestion = index > 0 ? data.indexOfCurrentQuestion += index : 0
    
    AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify({[key]:data}))

  
  })
  
}

export function saveUserAnswer ({ key, indexOfCurrentQuestion, userAnswer }){
  AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
  .then(results => {

    let data = JSON.parse(results)[key]
    data.questions[indexOfCurrentQuestion].answered = userAnswer
    // console.log("api data", data)

    return AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify({[key]:data}))
  
  })
  
}

export function cleanStorage(){
  return AsyncStorage.clear(result => result)
}