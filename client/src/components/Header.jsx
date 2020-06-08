import React from 'react';

const Header = ({ partySize, totalWings }) => (
  <div className='header'>
    <table className='breakdown'>
      <tbody>
        <tr>
          <td>Party Size:</td>
          <td>{partySize}</td>
        </tr>
        <tr>
          <td>Total 🍗:</td>
          <td>{totalWings}</td>
        </tr>
      </tbody>
    </table>
    <h1>Wing Calculator!</h1>
  </div>
);

export default Header;
