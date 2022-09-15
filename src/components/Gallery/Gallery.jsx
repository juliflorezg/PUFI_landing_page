import React from 'react'
import umbrellaCover from '../../assets/umbrella_cover.jpg'
import puffCover from '../../assets/puff_cover.jpg'
import bagCover from '../../assets/bag_cover.jpg'
import neckPillowCover from '../../assets/neck_pillow_cover.webp'
import umbrellaGallery from '../../assets/gallery_umbrella.jpg'
import beachGallery from '../../assets/gallery_beach.jpg'

import styles from './Gallery.module.scss'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <span className={styles['gallery__label']}>Instagram</span>
      <span className={styles['gallery__hashtag']}>#espufi</span>
      <div className={styles['gallery__grid']}>
        <div>
          <img src={umbrellaGallery} alt="foto pareja con de umbrella" />
        </div>
        <div>
          <img src={bagCover} alt="foto de bolsa para compras" />
        </div>
        <div>
          <img src={puffCover} alt="foto de puff para descanso" />
        </div>
        <div>
          <img src={umbrellaCover} alt="foto de bebe y umbrella" />
        </div>
        <div>
          <img src={beachGallery} alt="foto de mujer con puff en la playa" />
        </div>
        <div>
          <img src={neckPillowCover} alt="foto mujer con almohada de cuello" />
        </div>
      </div>
    </section>
  )
}
