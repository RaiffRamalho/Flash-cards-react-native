import React from "react";
import { AsyncStorage  } from "react-native";

import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'UdaciFitness:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Let"s play flip cards',
    body: "👋 don't forget to answer a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              //for project purpose the project notification is made on the same day,
              //the reviewer only having to change the hour and minute for correction
              let today = new Date()
              today.setDate(today.getDate())
              //set hour and minute
              //default hour: 10 am
              today.setHours(14)
              today.setMinutes(55)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: today,
                  repeat: 'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}