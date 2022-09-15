import React, { useRef } from 'react'
import styles from './NewsLetter.module.scss'
import { useForm } from '@formspree/react'

import { useSelector, useDispatch } from 'react-redux'
import { formActions } from '../../store/form'

export default function ContactForm() {
  const emailRef = useRef(null)
  const [state, handleSubmit] = useForm('xdojaqwy')

  const showError = useSelector(state => !state.form.isEmailValid)
  const emailError = useSelector(state => state.form.emailError)
  const enteredEmail = useSelector(state => state.form.enteredEmail)
  const dispatch = useDispatch()
  let formContent


  if (state.errors.length > 0 && state.errors[0].code === 'EMPTY') {
    dispatch(formActions.setEmptyEmailError())

  }
  if (state.errors.length > 0 && state.errors[0].code === 'TYPE_EMAIL') {
    dispatch(formActions.setInvalidEmailError())
  }



  const setEmailHandler = e => {
    let enteredEmail = e.target.value

    dispatch(formActions.setEnteredEmail({ enteredEmail }))
  }

  formContent = (
    <form
      className={`${styles['newsletter__form']} ${
        showError && emailError && styles['newsletter__form--error']
      }`}
      // onSubmit={customSubmitHandler}
      onSubmit={handleSubmit}
    >
      <input
        id="email"
        // type="email"
        name="email"
        placeholder="Ingresa tu email"
        ref={emailRef}
        onChange={setEmailHandler}
      />
      {/* <div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div> */}
      <button type="submit" disabled={state.submitting}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </form>
  )

  if (state.succeeded) {
    dispatch(formActions.setValidEmail())
    formContent = <p className={styles['newsletter__thanku-message']}>Gracias por suscribirte al Newsletter!</p>
  }

  return (
    <section className={styles.newsletter}>
      <h2 className={styles['newsletter__title']}>Newsletter</h2>
      <span className={styles['newsletter__label']}>Suscribete</span>
      <p>Y entérate de todas las novedades</p>

      {showError && <p className={styles['newsletter__error']}>{emailError}</p>}
      {formContent}
    </section>
  )
}
