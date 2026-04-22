import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import alertReducer from './alertSlice'
import sidebarReducer from '../components/layout/sidebar/stores/sidebarSlice'
import authReducer from '../features/auth/stores/authSlice'
import { usersApi } from '../features/users/services/users.api'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    alert: alertReducer,
    sidebar: sidebarReducer,
    auth: authReducer,

    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
