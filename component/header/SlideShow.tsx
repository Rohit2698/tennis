import React from 'react';
import { primaryColor } from '../../constant/ColorConstant';
import {
  DifferentSlideShowContainer,
  HomepageSubText,
  HomepageTitle,
  SlideshowContainer,
} from './Style';

const SlideShow = () => {
  return (
    <SlideshowContainer>
      <DifferentSlideShowContainer>
        <HomepageTitle>
          Best <span style={{ color: primaryColor }}>Tennis</span> School & Exclusive Club
        </HomepageTitle>
        <HomepageSubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip
        </HomepageSubText>
      </DifferentSlideShowContainer>
    </SlideshowContainer>
  );
};

export default SlideShow;
