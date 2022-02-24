import { Grid } from '@mui/material';
import React from 'react';
import {
  ContactsDetail,
  ContactTitle,
  ContactUsDescriptionTitle,
  ContactUsSubText,
  ContactUsTitle,
} from './Style';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { contactDetails, mapLink } from '../../constant/SiteConstants';
import { primaryColor } from '../../constant/ColorConstant';

const ContactUsView = () => (
  <Grid container style={{ justifyContent: 'center', marginTop: 100 }}>
    <Grid item xs={9}>
      <Grid container spacing={6}>
        <Grid item xs={5}>
          <iframe
            src={mapLink}
            width={'100%'}
            height={'500px'}
            style={{ border: 0, borderRadius: 10 }}
          ></iframe>
        </Grid>
        <Grid item xs={7}>
          <ContactUsTitle>CONTACT US</ContactUsTitle>
          <ContactUsDescriptionTitle>GET IN TOUCH WITH US</ContactUsDescriptionTitle>
          <ContactUsSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </ContactUsSubText>
          <Grid container style={{ marginTop: 30 }} spacing={3}>
            {contactDetails.map((item) => (
              <Grid item xs={6} key={item.id}>
                <ContactTitle>{item.title}</ContactTitle>
                <ContactsDetail>
                  <LocalPhoneIcon style={{ color: primaryColor, fontSize: 20, marginRight: 10 }} />
                  <a href={`tel:${item.phoneNumber}`}>{item.phoneText}</a>
                </ContactsDetail>
                <ContactsDetail>
                  <EmailIcon style={{ color: primaryColor, fontSize: 20, marginRight: 10 }} />
                  <a href={`mailto:${item.mail}`}>{item.mail}</a>
                </ContactsDetail>
                <ContactsDetail>
                  <LocationOnIcon style={{ color: primaryColor, fontSize: 20, marginRight: 10 }} />
                  <a target={'_blank'} href={item.locationLink}>
                    {item.locationText}
                  </a>
                </ContactsDetail>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default ContactUsView;
