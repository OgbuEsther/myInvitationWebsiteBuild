import React from "react";
import styled from "styled-components";
import images from "./Assets/codelablogo.png";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Images src={images} />
        </Logo>
        <Nav>
          <Text>About the Developer</Text>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Text = styled.h3`
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Images = styled.img`
  width: 75%;
`;

const Logo = styled.div`
  width: 200px;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #0C0C0E; */
  /* position: fixed; */
  z-index: 435337;
  /* background-color: rgba(0, 44, 81, 0.3); */
`;
