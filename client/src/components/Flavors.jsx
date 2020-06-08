import React from 'react';
import classNames from 'classnames';

const FLAVORS = [
  { value: 'BBQ', label: 'Barbeque' },
  { value: 'BLACKENED', label: 'Blackened' },
  { value: 'BUFFALO', label: 'Buffalo' },
  { value: 'ATOMIC', label: 'Atomic' },
];

const Flavors = ({ selectedFlavor, handleSelectFlavor }) => (
  <div className='flavors'>
    {FLAVORS.map(({ value, label }) => (
      <button
        className={classNames('flavor', { selected: selectedFlavor === value })}
        onClick={handleSelectFlavor(value)}
      >
        {label}
      </button>
    ))}
  </div>
);

export default Flavors;
