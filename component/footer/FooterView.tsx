import { Grid } from '@mui/material';
import React from 'react';
import {
  FooterBackground,
  FooterContactsDetail,
  FooterContainer,
  FooterDescriptionText,
  FooterTitle,
} from './Style';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { contactDetails, quickLinks } from '../../constant/SiteConstants';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { primaryColor } from '../../constant/ColorConstant';

const FooterView = () => (
  <Grid style={{ marginTop: 100 }}>
    <FooterContainer>
      <FooterBackground>
        <Grid container justifyContent={'center'}>
          <Grid item xs={9} style={{ marginTop: 80 }}>
            <Grid container spacing={4}>
              <Grid item xs={5}>
                <h1 style={{ color: 'white' }}>Logo</h1>
                <FooterDescriptionText style={{ color: 'white' }}>
                  Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod
                </FooterDescriptionText>
                <div>
                  <FooterContactsDetail>
                    <LocalPhoneIcon
                      style={{ color: primaryColor, fontSize: 20, marginRight: 10 }}
                    />
                    <a href={`tel:${contactDetails[0].phoneNumber}`}>
                      {contactDetails[0].phoneText}
                    </a>
                  </FooterContactsDetail>
                  <FooterContactsDetail>
                    <EmailIcon style={{ color: primaryColor, fontSize: 20, marginRight: 10 }} />
                    <a href={`mailto:${contactDetails[0].mail}`}>{contactDetails[0].mail}</a>
                  </FooterContactsDetail>
                  <FooterContactsDetail>
                    <LocationOnIcon
                      style={{ color: primaryColor, fontSize: 20, marginRight: 10 }}
                    />
                    <a target={'_blank'} href={contactDetails[0].locationLink} rel="noreferrer">
                      {contactDetails[0].locationText}
                    </a>
                  </FooterContactsDetail>
                </div>
              </Grid>
              <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <FooterTitle>Quick Links</FooterTitle>
                  {quickLinks.map((item) => (
                    <FooterContactsDetail key={item.id}>
                      <ArrowForwardIosIcon
                        style={{ color: primaryColor, fontSize: 20, marginRight: 10 }}
                      />
                      <a>{item.title}</a>
                    </FooterContactsDetail>
                  ))}
                </div>
              </Grid>
              <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <FooterTitle>Work Hours</FooterTitle>
                  <FooterContactsDetail>
                    <QueryBuilderIcon
                      style={{ color: primaryColor, fontSize: 20, marginRight: 10 }}
                    />
                    9AM - 7PM, Monday-Saturday
                  </FooterContactsDetail>
                  <FooterDescriptionText style={{ color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod
                  </FooterDescriptionText>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FooterBackground>
    </FooterContainer>
  </Grid>
);

export default FooterView;
