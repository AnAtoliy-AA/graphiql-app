import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '@store/store'
import { HYDRATE } from 'next-redux-wrapper'

interface HydrateAction<P> extends Action<typeof HYDRATE> {
  payload: P
}

export type AppHydrateAction = HydrateAction<AppState>

export interface AuthState {
  authState: boolean
}

const initialState: AuthState = {
  //TODO change to false after implementing authorization logic
  authState: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload
    },
  },

  // Using the 'builder callback' notation instead of extraReducers object notation
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: HydrateAction<AppState>) => {
      if (action.payload.auth) {
        return {
          ...state,
          ...action.payload.auth,
        }
      }
      return state
    })
  },
})

export const { setAuthState } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState

export default authSlice.reducer
