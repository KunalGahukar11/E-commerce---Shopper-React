import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((product) => product.id === Number(productId));

  return (
    <div className='product'>
      <BreadCrums product={product}></BreadCrums>
      <ProductDisplay product={product}></ProductDisplay>
      <Descriptionbox></Descriptionbox>
      <RelatedProduct></RelatedProduct>
    </div>
  )
}

export default Product