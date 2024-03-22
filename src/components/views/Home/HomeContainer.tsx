import styled from 'styled-components';
import LogoSection from './LogoSection/LogoSection';
import AboutSection from './AboutSection/AboutSection';

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// 로고, about, our games

const HomeContainer = () => {
  return (
    <HomeWrapper>
      <LogoSection />
      <AboutSection />
    </HomeWrapper>
  );
};

export default HomeContainer;
