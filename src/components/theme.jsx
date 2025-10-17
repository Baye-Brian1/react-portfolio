import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Theme({ toggleTheme, lightMode }) {
  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      <FontAwesomeIcon
        icon={lightMode ? faMoon : faSun}
        style={{ fontSize: '18px' }}
      />
    </div>
  );
}

export default Theme;
