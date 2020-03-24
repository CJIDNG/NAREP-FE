import React from 'react';
import {
  HomeBannerImage, HomeBannerContainer, HomeBannerText, HomeBannerTextContainer
} from './home-banner.styles';
import CustomButton from '../shared/custom-button/custom-button.component';

const HomeBanner = () => (
  <HomeBannerContainer>
    <HomeBannerTextContainer>
      <HomeBannerText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, et fugiat. Dolore aspernatur dicta asperiores rem molestias
        harum tempore provident natus consequuntur ab cumque sunt ad, doloremque eum
        reprehenderit laboriosam.
      </HomeBannerText>
      <CustomButton>Register with email</CustomButton>
    </HomeBannerTextContainer>
    <HomeBannerImage
      src={`${process.env.PUBLIC_URL}/img/home-banner.jpg`}
      alt="Credit: Markus Spiske"
      title="Credit: Markus Spiske"
    />
  </HomeBannerContainer>
);
export default HomeBanner;
