import Styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { primaryColor, secondaryColor } from '../../constant/ColorConstant';

export const FooterContainer = Styled(Grid)`
    background-image: url("/images/image2.jpg");
    background-size: cover;
    height: 500px;
`;

export const FooterBackground = Styled.div`
    background-color: ${secondaryColor};
    opacity: 0.9;
    height: 100%;
    transition: border-radius 0.3s, opacity 0.3s;
`;

export const FooterDescriptionText = Styled(Typography)`
    background-color: ${secondaryColor};
    opacity: 0.9;
    transition: border-radius 0.3s, opacity 0.3s;
`;

export const FooterContactsDetail = Styled(Typography)`
    font-size: 16px;
    margin-top: 15px;
    display: flex;
    color: ${secondaryColor};
    font-weight: 300;
    align-items: center;
    color: #ffff;
    a{
        color: #ffff;
        cursor: pointer;
    }
    &:hover {
        a {
        color: ${primaryColor};
        }
    }
`;

export const FooterTitle = Styled(Typography)`
    font-size: 30px;
    color: ${primaryColor};
    font-weight: bold;
`;
