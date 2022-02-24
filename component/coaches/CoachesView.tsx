import { Avatar, Grid } from '@mui/material';
import React from 'react';
import { PrimaryHeading } from '../common/CommonStyle';
import {
  AvatarContainer,
  CoachDescriptionContainer,
  CoachesContainer,
  CoachSubText,
  TeacherText,
} from './Style';

const CoachesView = () => {
  return (
    <Grid style={{ marginTop: 100 }}>
      <Grid style={{ marginBottom: 100 }} container justifyContent={'center'}>
        <Grid item xs={7}>
          <Grid container style={{ marginBottom: 50 }} justifyContent={'center'}>
            <PrimaryHeading>Our Coaches</PrimaryHeading>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'}>
        <CoachesContainer item xs={3}>
          <AvatarContainer>
            <Avatar src="/images/image1.jpg" sx={{ width: 128, height: 128 }} />
          </AvatarContainer>
          <CoachDescriptionContainer>
            <TeacherText>Manish</TeacherText>
            <CoachSubText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatF
            </CoachSubText>
          </CoachDescriptionContainer>
        </CoachesContainer>
        <CoachesContainer style={{ transform: 'scale(1.2)' }} item xs={3}>
          <AvatarContainer>
            <Avatar src="/images/image1.jpg" sx={{ width: 128, height: 128 }} />
          </AvatarContainer>
          <CoachDescriptionContainer>
            <TeacherText>Jitendra(Head Coach)</TeacherText>
            <CoachSubText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatF
            </CoachSubText>
          </CoachDescriptionContainer>
        </CoachesContainer>
        <CoachesContainer item xs={3}>
          <AvatarContainer>
            <Avatar src="/images/image1.jpg" sx={{ width: 128, height: 128 }} />
          </AvatarContainer>
          <CoachDescriptionContainer>
            <TeacherText>Rohit</TeacherText>
            <CoachSubText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatF
            </CoachSubText>
          </CoachDescriptionContainer>
        </CoachesContainer>
      </Grid>
    </Grid>
  );
};

export default CoachesView;
