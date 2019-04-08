import config from '../config.json'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(config.storageKey)

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(config.storageKey, serializedState)
  } catch (err) {
    // maybe throw this to a crash app report server?
  }
}
