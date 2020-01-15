import React from 'react';
import data from './data';

const { users, products, companies } = data;




function UserList() {
  return (
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
  );
}

export default UserList;
