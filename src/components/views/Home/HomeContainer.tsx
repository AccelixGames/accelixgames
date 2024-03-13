import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  color: white;
`;

const HomeContainer = () => {
  return (
    <div>
      <div>home container2</div>
      <h1>test</h1>
      <Button>Click</Button>
    </div>
  );
};

export default HomeContainer;
