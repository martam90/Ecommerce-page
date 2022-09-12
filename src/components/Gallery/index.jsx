import React from 'react';
import bgImages from '../../assets/bannerData';
import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-thumbnail.scss';

const Gallery = () => {
  return (
    <>
      <LightGallery
        mode="lg-fade"
        elementClassNames="slide--outer"
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgFullscreen]}
      >
        {bgImages.map((item) => (
          <a href={item.img} className="slide" key={item.id}>
            <img alt="Converse" src={item.img} />
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default Gallery;
