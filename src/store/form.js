import { createSlice } from '@reduxjs/toolkit'

const initialFormState = { enteredEmail: '', isEmailValid: null, emailError: null }

const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    setEnteredEmail(state, action){
      state.enteredEmail = action.payload.enteredEmail
    },
    setEmptyEmailError(state) {
      state.isEmailValid = false
      state.emailError = 'El email no puede estar vacío.'
    },
    setInvalidEmailError(state) {
      state.isEmailValid = false
      state.emailError = 'Por favor ingresa un email valido.'
    },
    setValidEmail(state) {
      state.isEmailValid = true
      state.emailError = null
    },
  },
})

export const formActions = formSlice.actions

export default formSlice.reducer
