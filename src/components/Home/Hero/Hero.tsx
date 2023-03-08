import React from "react";
import pic from "../git.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <pre>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Repellendus vel dignissimos <br /> praesentium voluptatem <br />{" "}
            laborum molestiae nulla.
          </pre>
        </Wrapper>
        <ImgHold>
          <img src={pic} alt="" />
        </ImgHold>
      </Container>
    </div>
  );
};

export default Hero;

const ImgHold = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
