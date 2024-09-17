import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../Assets/data';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>popular in women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i) => {
          return <Item 
              key = {i} 
              id = {item.id} 
              image = {item.image} 
              imgStyle={{ width: "250px", height: "310px", objectFit: "cover" }}
              name = {item.name} 
              new_price = {item.new_price} 
              old_price = {item.old_price}>
          </Item>
        })}
      </div>
    </div>
  )
}

export default Popular