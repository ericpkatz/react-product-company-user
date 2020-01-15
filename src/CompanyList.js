import React from 'react';
import data from './data';

const { companies } = data;




function CompanyList() {
  return (
      <div>
        <h2>Companies List ({ companies.length})</h2>
        <ul>
          {
            companies.map( company => {
              return (
                <li key={ company.id }>
                  { company.name }
                </li>
              );
            })
          }
        </ul>
      </div>
  );
}

export default CompanyList;
