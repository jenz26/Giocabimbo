import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/poppins'
import '@fontsource/roboto'
import App from './App.jsx'
import './index.css'

//  Import MUI Theme
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme/customTheme'

//  Import Redux Provider
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* reset CSS + background */}
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
