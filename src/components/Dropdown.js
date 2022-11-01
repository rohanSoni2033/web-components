import React, { useState, useEffect } from 'react';
import Expend from '../icon/Expend';
import { createRef } from 'react';
import './Dropdown.css';

const Dropdown = props => {
  const closeDropdownHandler = event => {
    if (!event.target.closest('.dropdown.active')) {
      setIsDropdownMenuOpen(false);
    }
  };

  const dropdownRef = createRef();

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  useEffect(() => {
    if (isDropdownMenuOpen) {
      document.addEventListener('click', closeDropdownHandler);
    }

    return () => {
      document.removeEventListener('click', closeDropdownHandler);
    };
  }, [isDropdownMenuOpen]);

  const dropdownToggleHandler = () => {
    setIsDropdownMenuOpen(value => !value);
  };

  return (
    <div
      className={`dropdown flex-column ${isDropdownMenuOpen ? 'active' : ''}`}
      ref={dropdownRef}
    >
      <button
        type='button'
        className='btn flex-space-between dropdownToggle'
        onClick={dropdownToggleHandler}
      >
        <p>{props.value}</p>
        <div className='flex-center dropdownToggleIcon'>
          <Expend />
        </div>
      </button>
      <div className='dropdownMenu'>
        <ul className='flex-column'>
          {props.menu.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
