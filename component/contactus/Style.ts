import Styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { primaryColor, secondaryColor } from '../../constant/ColorConstant';

export const ContactUsTitle = Styled(Typography)`
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    color: ${primaryColor};
`;

export const ContactUsDescriptionTitle = Styled(Typography)`
    font-size: 35px;
    font-weight: bold;
    font-style: italic;
    color: ${secondaryColor};
`;

export const ContactUsSubText = Styled(Typography)`
    color: grey;
    font-size: 16px;
    font-weight: 300;
    width: 90%;
    line-height: 30px;
    text-align: justify;
`;

export const ContactTitle = Styled(Typography)`
    font-size: 20px;
    font-weight: bold;
    color: ${secondaryColor};
`;

export const ContactsDetail = Styled(Typography)`
    font-size: 16px;
    color: ${secondaryColor};
    margin-top: 15px;
    display: flex;
    color: ${secondaryColor};
    font-weight: 300;
    align-items: center;
    &:hover {
        color: ${primaryColor};
    }
`;
