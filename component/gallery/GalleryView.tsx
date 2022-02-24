import { Grid } from '@mui/material';
import React from 'react';
import { GalleryImages } from '../../constant/SiteConstants';
import { PrimaryHeading } from '../common/CommonStyle';
import ImageGallery from 'react-image-gallery';

const GalleryView = () => (
  <Grid container style={{ marginTop: 100 }} justifyContent={'center'}>
    <Grid item xs={7}>
      <Grid container style={{ marginBottom: 50 }} justifyContent={'center'}>
        <PrimaryHeading>GALLERY</PrimaryHeading>
      </Grid>
      <ImageGallery items={GalleryImages} />
    </Grid>
  </Grid>
);

export default GalleryView;
