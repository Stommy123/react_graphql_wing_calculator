import React from 'react';
import classNames from 'classnames';

const CommitOrderButton = ({ isDisabled, handleCommitOrder }) => (
  <div className='commitOrder'>
    <button onClick={handleCommitOrder} className={classNames('wingIt', { disabled: isDisabled })}>
      Wing it! 🍗
    </button>
  </div>
);

export default CommitOrderButton;
