import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className='relatedProducts'>
        <h1>Related Product</h1>
        <hr />
        <div className="relatedProducts-item">
            {data_product.map((item,i) => {
                return <Item
                key = {i}
                id = {item.id}
                image = {item.image}
                imgStyle={{ width: "250px", height: "300px", objectFit: "cover" }}
                name = {item.name}
                new_price = {item.new_price}
                old_price = {item.old_price}>
                </Item>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct