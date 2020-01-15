import React from 'react';
import data from './data';

const { products  } = data;




function ProductList() {
  return (
      <div>
        <h2>Product List ({ products.length})</h2>
        <ul>
          {
            products.map( product => {
              return (
                <li key={ product.id }>
                  <strong>{ product.name }</strong> made with { product.material }
                </li>
              );
            })
          }
        </ul>
      </div>
  );
}

export default ProductList;
