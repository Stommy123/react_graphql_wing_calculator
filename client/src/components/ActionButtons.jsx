import React from 'react';

const ActionButtons = ({ appetite, count, updateAppetiteCount }) => (
  <div className='actions'>
    <button disabled={count <= 0} className='button decrement' onClick={updateAppetiteCount(appetite, -1)}>
      -
    </button>
    <div className='count'>{count}</div>
    <button className='button increment' onClick={updateAppetiteCount(appetite, 1)}>
      +
    </button>
  </div>
);

export default ActionButtons;
