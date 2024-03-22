import styled from 'styled-components';
import Header from './Header/Header';
import { PropsWithChildren } from 'react';
import Footer from './Footer/Footer';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
export default Layout;
