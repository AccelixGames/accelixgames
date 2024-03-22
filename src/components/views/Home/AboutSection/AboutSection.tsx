import Theme from '@/style/theme';
import styled, { keyframes } from 'styled-components';

const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.gray900};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const colorChange = keyframes`
  0% {color: whitesmoke;}
  50% {color: wheat;}
  100% {color: blueviolet;}
`;

const AboutText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  animation: ${colorChange} 5s linear infinite;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: white;
  margin-top: 12px;
`;

const SmallText = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: white;
  margin-top: 30px;
  white-space: pre-wrap;
  line-height: 1.4;
`;

const AboutSection = () => {
  const smallTextValue =
    '엑셀릭스는 2023년 11월에 결성된 인디 게임 제작팀으로,\n게임이 재미뿐만 아니라 소셜 임팩트도 함께 줄 수는 없을까? 하는 고민에서 출발했습니다. ';

  return (
    <AboutWrapper>
      <TextWrapper>
        <AboutText>ABOUT</AboutText>
        <Title>우리는 만듭니다</Title>
        <Title>사회를 생각하는 게임을..!</Title>
        <SmallText>{smallTextValue}</SmallText>
      </TextWrapper>
    </AboutWrapper>
  );
};
export default AboutSection;
