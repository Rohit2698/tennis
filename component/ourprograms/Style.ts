import Styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { secondaryColor } from '../../constant/ColorConstant';

export const OurProgramsInfoCardContainer = Styled(Grid)`
    background-image: url("/images/image1.jpg");
    background-size: cover;
`;

export const OurProgramsInfoCardBackground = Styled.div`
    background-color: ${secondaryColor};
    opacity: 0.95;
    height: 100%;
    transition: border-radius 0.3s, opacity 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProgramsText = Styled(Typography)`
    color: #ffff;
    font-size: 2rem;
    font-weight: bold;
`;

export const ProgramsSubText = Styled(Typography)`
    color: grey;
    font-size: 16px;
    font-weight: 300;
    width: 90%;
    line-height: 30px;
    text-align: center;
`;
