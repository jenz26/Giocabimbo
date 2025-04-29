import { createSlice } from '@reduxjs/toolkit'

// Funzioni helper per localStorage
const loadFavorites = () => {
  const stored = localStorage.getItem('favorites')
  return stored ? JSON.parse(stored) : []
}

const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

// Slice Redux
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavorites(),
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload
      if (state.includes(id)) {
        return state.filter(favId => favId !== id)
      } else {
        return [...state, id]
      }
    }
  }
})

// Middleware manuale (alternative a redux-persist)
export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
