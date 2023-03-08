import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navbar>
          <Products>Products</Products>
          <Contacts>Contacts</Contacts>
          <About>About</About>
        </Navbar>
        <Last>
          <Button>SignIn</Button>
          <Button>SignUp</Button>
        </Last>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Last = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  height: 40px;
  width: 150px;
  background-color: #6666ce;
  border: none;
`;
const Contacts = styled.div``;
const About = styled.div``;
const Products = styled.div``;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  align-items: center;
`;
const Logo = styled.div``;
const Navbar = styled.div``;
const SignIn = styled.div``;
const Container = styled.div`
  height: 70px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
