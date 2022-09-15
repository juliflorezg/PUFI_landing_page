import React from 'react'
import styles from './Hero.module.scss'
import icon_pillow from '../../assets/icon_pillow.svg'
import icon_umbrella from '../../assets/icon_umbrella.svg'
import icon_bag from '../../assets/icon_bag.svg'
import icon_neck_pillow from '../../assets/icon_neck_pillow_1.png'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <header>
        <nav className={styles.header}>
          <div className={styles['header__logo']}>
            <a href="#">Pufi</a>
          </div>
          <div className={styles['header__navmenu']}>
            <ul>
              <li>
                <a href="#puff">
                  <img src={icon_pillow} alt="" />
                  Pufi puff
                </a>
              </li>
              <li>
                <a href="#rain">
                  <img src={icon_umbrella} alt="" />
                  Pufi rain
                </a>
              </li>
              <li>
                <a href="#cart">
                  <img src={icon_bag} alt="" />
                  Pufi cart
                </a>
              </li>
              <li>
                <a href="#nap">
                  <img src={icon_neck_pillow} alt="" />
                  Pufi nap
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['header__access']}>
            <ul>
              <li>
                <a href="#">
                  Mi cuenta{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">Mi compra</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className={styles.welcome}>
        <h1 className={styles['welcome__title']}>
          Estar cómodo,
          <br /> nunca fue tal fácil.
        </h1>
        <a href="#" className={styles['welcome__link']}>
          shop
        </a>
        <div className={styles['welcome__buttons']}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </section>
  )
}
