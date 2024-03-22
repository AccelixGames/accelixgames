import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 66px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const DescText = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: white;
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-top: 30px;
`;

const StrongText = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: white;
  margin-top: 10px;
`;

const LogoSection = () => {
  const logoUrl =
    'https://gongpark-toyproject.s3.ap-northeast-2.amazonaws.com/aceelix/logo_white_png.png';

  return (
    <Wrapper>
      <Image alt="logo" width={400} height={400} src={logoUrl} />
      <DescText>독창적이고, 재미있는 게임을 만듭니다!</DescText>
      <SmallText>누적 다운로드 수</SmallText>
      <StrongText>1,850,200 만</StrongText>
    </Wrapper>
  );
};
export default LogoSection;
