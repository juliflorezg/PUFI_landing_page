import React from 'react'
import styles from './Product.module.scss'
import styled from 'styled-components'

const CoverDiv = styled.div`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.cover})`};
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }
`

export default function Product({
  cover,
  product,
  title,
  description,
  orientation,
}) {
  return (
    <article
      className={`${styles.product} ${
        orientation === 'row-reverse' ? styles['row-reverse'] : styles['row']
      }`}
      id={title.slice(5, title.length).toLowerCase()}
    >
      <CoverDiv className={styles['product__cover']} cover={cover}>
        <a href={`#${title.slice(5, title.length).toLowerCase()}`}>shop</a>
      </CoverDiv>

      <div className={styles['product__product-info']}>
        <img
          src={product}
          alt={description}
          className={styles['product__product-img']}
        />
        <span className={styles['product__product-title']}>{title}</span>
        <p className={styles['product__product-description']}>{description}</p>
        <a
          href={`#${title.slice(5, title.length).toLowerCase()}`}
          className={styles['product__product-info-link']}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
          ver más
        </a>
      </div>
    </article>
  )
}
