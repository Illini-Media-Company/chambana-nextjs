import React from 'react';

const PortableTextComponents = {
  types: {
    image: ({ value }) => <img src={value.asset.url} alt={value.alt || ''} />,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default PortableTextComponents;