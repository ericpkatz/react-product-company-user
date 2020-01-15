import React from 'react';
import data from './data';

const { users, products, companies } = data;




function App() {
  return (
    <main>
      <div>
        <h2>Product List ({ products.length})</h2>
        <ul>
          {
            products.map( product => {
              return (
                <li key={ product.id }>
                  { product.name }
                </li>
              );
            })
          }
        </ul>
        

      </div>
      <div>
        <h2>User List ({ users.length})</h2>
        <ul>
          {
            users.map( user => {
              return (
                <li key={ user.id }>
                  { user.name }
                </li>
              );
            })
          }
        </ul>
        

      </div>
    </main>
  );
}

export default App;
