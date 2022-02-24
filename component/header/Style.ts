import Styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Button, Typography } from '@mui/material';
import { primaryColor } from '../../constant/ColorConstant';

const rotate = keyframes`
  100%  {background-image: url("/images/image1.jpg");}
   50% {background-image: url("/images/image2.jpg");}
   10% {background-image: url("/images/image3.jpg");}
`;

export const SlideshowContainer = Styled.div`
    background-image: url("/images/image1.jpg");
    background-size: cover;
    height: 100vh;
    animation: ${rotate} 10s ease-in-out infinite;
`;

export const DifferentSlideShowContainer = Styled.div`
    background-color: transparent;
    background-image: linear-gradient(130deg, #000000 49%, #0D1301D1 34%);
    /* opacity: 0.65; */
    height: 100vh;
    transition: border-radius 0.3s, opacity 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HomepageTitle = Styled(Typography)`
    font-size: 80px;
    font-style: italic;
    color: #ffff;
    font-weight: bold;
    width: 50%;
    text-align: center;
`;

export const HomepageSubText = Styled(Typography)`
    font-size: 1rem;
    color: #ffff;
    width: 30%;
    text-align: center;
`;
export const MenuButton = Styled(Button)`
    color: #ffff;
    margin: 20px;
    font-weight: bold;
    &:hover {
        color: ${primaryColor} !important;
    }
`;
