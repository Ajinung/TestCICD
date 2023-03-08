import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Resource>
            <h1>RESOURCES</h1>
            <p>Docs</p>
            <p>Learn</p>
            <p>Guides</p>
            <p>API Reference</p>
            <p>Blog</p>
          </Resource>
          <Community>
            <h1>COMMUNITY</h1>
            <p>User Showcase</p>
            <p>Funding</p>
            <p>Guides</p>
            <p>API Reference</p>
            <p>Blog</p>
          </Community>
          <About>
            <h1>ABOUT</h1>

            <p>Home</p>
            <p>GitHub</p>
            <p>Twitter</p>
            <p>Contact Sales</p>
          </About>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;

const About = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: #fff; */
`;

const Community = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: #fff; */
`;

const Resource = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: #fff; */
`;

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
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
  color: #fff;
`;
