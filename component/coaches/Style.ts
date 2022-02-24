import Styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { secondaryColor } from '../../constant/ColorConstant';

export const CoachesContainer = Styled(Grid)`
    display: flex;
    justify-content: center;
    background: #efefef;
    flex-direction: column;
    border-radius: 10px;
    height: 300px;
    margin: 20px;
`;

export const TeacherText = Styled(Typography)`
    color: ${secondaryColor};
    font-weight: bold;
    font-size: 1.6rem;
`;

export const AvatarContainer = Styled.div`
    position: relative;
    top: -60px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CoachDescriptionContainer = Styled.div`
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    top: -30px;
`;
export const CoachSubText = Styled(Typography)`
    color: grey;
    font-size: 16px;
    font-weight: 300;
    width: 90%;
    line-height: 30px;
    text-align: center;
`;
