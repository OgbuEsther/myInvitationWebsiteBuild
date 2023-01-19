import React from "react";
import styled from "styled-components";
import images from "./Assets/codelablogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const My_Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Images src={images} />
        </Logo>
        <Nav>
          <Text to="/register">
            <h3>Register</h3>
          </Text>
          <Text to="">
            <h3>About the Developer</h3>
          </Text>
        </Nav>
        <Icons>
          <GiHamburgerMenu />
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default My_Header;

const Icons = styled.div`
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  /* margin-right: 40px; */
  cursor: pointer;
  color: white;
  @media screen and (max-width: 616px) {
    display: flex;
  }
`;

const Text = styled(NavLink)`
  cursor: pointer;
  transition: all 350ms;
  margin-left: 22px;
  text-decoration: none;
  h3 {
    color: white;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  color: white;
  @media screen and (max-width: 616px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Images = styled.img`
  /* width: 75%; */
  height: 40px;
  @media screen and (max-width: 616px) {
    height: 30px;
  }
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
  background-color: none;
  /* position: fixed; */
  z-index: 435337;
  /* background-color: rgba(0, 44, 81, 0.3); */
  @media screen and (max-width: 330px) {
    /* width: 100%; */
    /* background-color: red; */
  }
`;
