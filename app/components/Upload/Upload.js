import React from 'react'
import styles from './styles.css'

const Upload = () =>
  <div className={styles.container}>
    <h1>{'Dodawanie NGO do bazy danych.'}</h1>
    <ol className={styles.steps}>
      <li className={styles.step}>
        {'Pobierz formularz.'}
        <button>{'Pobierz formularz'}</button>
        <p><em>{'Wskazówka: Kliknij przycisk powyżej aby pobrać szablon zgłoszenia.'}</em></p>
      </li>
      <li className={styles.step}>
        {'Otwórz formularz w programie Excel i uzupełnij dane organizacji.'}
        <p><em>{'Wskazówka: Pobrany formularz znajdziesz w katalogu „Pobrane”.'}</em></p>
      </li>
      <li className={styles.step}>
        {'Kliknij przycisk poniżej aby odesłać nam wypełniony formularz.'}
        <button>{'Wyślij formularz'}</button>
      </li>
    </ol>
  </div>

export default Upload
