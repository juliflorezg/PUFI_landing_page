import React from 'react'
import umbrellaCover from '../../assets/umbrella_cover.jpg'
import umbrellaProduct from '../../assets/umbrella_product.jpg'
import puffCover from '../../assets/puff_cover.jpg'
import puffProduct from '../../assets/puff_product.webp'
import bagCover from '../../assets/bag_cover.jpg'
import bagProduct from '../../assets/bag_product.jpg'
import neckPillowCover from '../../assets/neck_pillow_cover.webp'
import neckPillowProduct from '../../assets/neck_pillow_product.webp'
import Product from './Product'

export default function Products() {
  const products = [
    {
      coverImg: umbrellaCover,
      productImg: umbrellaProduct,
      description: 'Descripción del producto, texto simulado',
      title: 'Pufi RAIN',
    },
    {
      coverImg: puffCover,
      productImg: puffProduct,
      description: 'Descripción del producto, texto simulado',
      title: 'Pufi PUFF',
    },
    {
      coverImg: bagCover,
      productImg: bagProduct,
      description: 'Descripción del producto, texto simulado',
      title: 'Pufi CART',
    },
    {
      coverImg: neckPillowCover,
      productImg: neckPillowProduct,
      description: 'Descripción del producto, texto simulado',
      title: 'Pufi NAP',
    },
  ]

  return (
    <main>
      {products.map((item, i ) => (
        <Product
          cover={item.coverImg}
          product={item.productImg}
          title={item.title}
          description={item.description}
          orientation={i%2 === 0 ? 'row' : 'row-reverse'}
          key={item.title}
        />
      ))}
    </main>
  )
}
