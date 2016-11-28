import React from 'react';
import openPopup from 'feathers-authentication-popups/handler';
import './button.less';

export default ({name, classSuffix, url, img, alt, text, popup}) => {
  return (
    <button className={`auth-button oauth-${classSuffix || name.toLowerCase().replace(' ', '')}`} title={`Login with ${name}`}>
      <a href={url} onClick={popup ? openPopup(url) : null} >
        <img src={img} alt={alt} />
        {text && <span>{text}</span>}
      </a>
    </button>
  );
};
