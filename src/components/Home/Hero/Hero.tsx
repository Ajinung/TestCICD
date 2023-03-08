import React from "react";
// import pic from "../git.png";
import styled from "styled-components";
import pics from "../nikeShoe.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            magnam sed adipisci, commodi perferendis neque quibusdam deleniti
            itaque excepturi sunt. Harum ipsam error unde recusandae sint, eum
            eveniet dolore corrupti?
          </p>
        </Wrapper>
        <ImgHold>
          <img src={pics} alt="" />
        </ImgHold>
      </Container>
    </div>
  );
};

export default Hero;

const ImgHold = styled.div`
  width: 50%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  width: 40%;
  height: 400px;

  h1 {
    color: white;
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
  }
  p {
    font-size: 15px;
    color: white;
    width: 500px;
    height: 100px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;
