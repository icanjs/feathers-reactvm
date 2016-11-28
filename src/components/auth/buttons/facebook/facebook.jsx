import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Facebook'}
      url={url || '/auth/facebook'}
      img='/src/components/auth/buttons/facebook/facebook.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
