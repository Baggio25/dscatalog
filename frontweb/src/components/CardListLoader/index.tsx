import React from 'react';
import ContentLoader from 'react-content-loader';

import './styles.css';

const CardListLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={320}
      height={460}
      viewBox="0 0 320 460"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
      <circle cx="106" cy="351" r="16" />
      <circle cx="146" cy="351" r="16" />
      <circle cx="185" cy="350" r="16" />
    </ContentLoader>
  </div>
);

export default CardListLoader;
