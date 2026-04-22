import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AlertState {
  message: string | null
  type: 'success' | 'info' | 'error' | null
}

const initialState: AlertState = { message: null, type: null }

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.message = action.payload.message
      state.type = action.payload.type
    },
    clearAlert: (state) => {
      state.message = null
      state.type = null
    },
  },
})

export const { setAlert, clearAlert } = alertSlice.actions
export default alertSlice.reducer
