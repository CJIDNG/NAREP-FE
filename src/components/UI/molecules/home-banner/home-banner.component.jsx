import React from 'react';
<<<<<<< HEAD
import CustomButton from '@Components/UI/atoms/custom-button/auth-button.component';
=======
import CustomButton from '@Atoms/custom-button/custom-button.component';
>>>>>>> restructure folder, added craco for imports
import {
  HomeBannerImage, HomeBannerContainer, HomeBannerText, HomeBannerTextContainer
} from './home-banner.styles';

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
