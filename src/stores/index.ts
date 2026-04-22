import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import alertReducer from './alertSlice'
import sidebarReducer from '../components/layout/sidebar/stores/sidebarSlice'
import authReducer from '../features/auth/stores/authSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    alert: alertReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
