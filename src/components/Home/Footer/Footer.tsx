import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Resource></Resource>
          <Community></Community>
          <About></About>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;

const About = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
`;

const Community = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
`;

const Resource = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  background-color: red;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
