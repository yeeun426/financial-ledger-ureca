import { useCallback } from 'react'

export const useLocalStorageSet = key => {
  const setValue = useCallback(
    value => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error(error)
      }
    },
    [key]
  )
  return setValue
}
