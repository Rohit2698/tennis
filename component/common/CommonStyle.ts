import Styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { primaryColor } from '../../constant/ColorConstant';

export const PrimaryHeading = Styled(Typography)`
    font-size: 38px;
    color: ${primaryColor};
    font-style: italic;
    font-weight: bold;
    border-bottom: 3px grey solid;
`;
