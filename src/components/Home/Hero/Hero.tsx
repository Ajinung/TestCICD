import React from "react";
import pic from "../git.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper></Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightgrey;
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-position: center;
`;
