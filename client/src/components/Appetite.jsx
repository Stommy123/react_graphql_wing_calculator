import React from 'react';
import { ActionButtons } from '.';

const APPETITE_DISPLAY_MAP = {
  snacker: 'Just snackin',
  average: 'Normal',
  bigEater: 'Big Eater!',
};

const Appetite = ({ appetite, appetiteCount, updateAppetiteCount }) => (
  <div className='appetite'>
    <div className='name'>{APPETITE_DISPLAY_MAP[appetite]}</div>
    <div className='actions-container'>
      <ActionButtons appetite={appetite} count={appetiteCount} updateAppetiteCount={updateAppetiteCount} />
    </div>
  </div>
);

export default Appetite;
