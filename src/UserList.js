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
            const company = companies.find( company => company.id === user.companyId );
            return (
              <li key={ user.id }>
                <strong>{ user.name }</strong> from { user.state } works for { company.name }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default UserList;
