import React from "react";
import styled from "styled-components";
import pic from "../../Assets/logo2.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={pic} />
        <Navbar>
          <Nav>Products</Nav>
          <Nav>Contacts</Nav>
          <Nav>About</Nav>
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
  width: 320px;
`;
const Button = styled.button`
  height: 40px;
  width: 150px;
  background-color: #6666ce;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  cursor: pointer;

  :hover {
    background-color: #9090fa;
    color: black;
    transition: all 350ms;
  }
`;
const Nav = styled.div`
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 80px;
`;
const Navbar = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 400px;
`;
const SignIn = styled.div``;
const Container = styled.div`
  height: 70px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
