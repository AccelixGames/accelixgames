import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 30px;
  height: 66px;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-left: 60px;
`;

const HeaderText = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

const HeaderList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Title>Accelix Games</Title>
      <HeaderList>
        <HeaderText>About</HeaderText>
        <HeaderText>Our Games</HeaderText>
        <HeaderText>Blog</HeaderText>
        <HeaderText>Block</HeaderText>
      </HeaderList>
    </HeaderDiv>
  );
};
export default Header;
