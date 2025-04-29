import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './features/favoritesSlice'

// Salvataggio su localStorage ogni volta che cambia qualcosa
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.favorites)
    localStorage.setItem('favorites', serializedState)
  } catch (e) {
    console.warn('Errore salvataggio localStorage', e)
  }
}

const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
})

// Ogni cambiamento, salva
store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export default store
