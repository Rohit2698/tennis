import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { PrimaryHeading } from '../common/CommonStyle';
import {
  OurProgramsInfoCardBackground,
  OurProgramsInfoCardContainer,
  ProgramsSubText,
  ProgramsText,
} from './Style';

const OurProgramView = () => (
  <Grid style={{ marginTop: 80 }}>
    <Grid container justifyContent={'center'}>
      <Grid item xs={7}>
        <Grid container style={{ marginBottom: 50 }} justifyContent={'center'}>
          <PrimaryHeading>Our Programmes</PrimaryHeading>
        </Grid>
      </Grid>
    </Grid>
    <Grid container alignItems={'stretch'}>
      <Grid item xs={4}>
        <Image
          src={'/images/programe.jpg'}
          loading={'lazy'}
          height={'70%'}
          width={'100%'}
          layout={'responsive'}
          objectFit={'cover'}
          alt={'Tennis academy'}
        />
      </Grid>
      <OurProgramsInfoCardContainer item xs={4}>
        <OurProgramsInfoCardBackground>
          <ProgramsText style={{ color: 'white' }}>Children Program</ProgramsText>
          <ProgramsSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatF
          </ProgramsSubText>
        </OurProgramsInfoCardBackground>
      </OurProgramsInfoCardContainer>
      <Grid item xs={4}>
        <Image
          src={'/images/programe1.jpg'}
          loading={'lazy'}
          height={'70%'}
          width={'100%'}
          layout={'responsive'}
          objectFit={'cover'}
          alt={'Tennis academy'}
        />
      </Grid>
      <OurProgramsInfoCardContainer item xs={4}>
        <OurProgramsInfoCardBackground>
          <ProgramsText style={{ color: 'white' }}>Adult Program</ProgramsText>
          <ProgramsSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatF
          </ProgramsSubText>
        </OurProgramsInfoCardBackground>
      </OurProgramsInfoCardContainer>
      <Grid item xs={4}>
        <Image
          src={'/images/programe3.jpg'}
          loading={'lazy'}
          height={'70%'}
          width={'100%'}
          layout={'responsive'}
          objectFit={'cover'}
          alt={'Tennis academy'}
        />
      </Grid>
      <OurProgramsInfoCardContainer item xs={4}>
        <OurProgramsInfoCardBackground>
          <ProgramsText style={{ color: 'white' }}>Private lessons</ProgramsText>
          <ProgramsSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatF
          </ProgramsSubText>
        </OurProgramsInfoCardBackground>
      </OurProgramsInfoCardContainer>
    </Grid>
  </Grid>
);

export default OurProgramView;
