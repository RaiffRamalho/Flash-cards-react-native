
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
      questions: []
    }
  }))
}

export function cleanStorage(){
  return AsyncStorage.clear(result => result)
}