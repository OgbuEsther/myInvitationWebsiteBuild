import React from "react";
import styled from "styled-components";
import images from "../Assets/blacklap.png";
import images2 from "../Assets/virtual.png";
import Header from "../Header";
import { AiFillStar } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

const Hero = () => {
  return (
    <Container>
      <Wrap>
        <Left>
          <TextHold>
            <Text>Theme:</Text>
            <Bold>Tech as a leveller in the 21st century</Bold>
            <Boxh>
              <Box></Box>
              <Icons><AiFillStar /></Icons>
            </Boxh>
            <Dateh>
              <Date>
                <Circle>
                  <Ico>
                    <BsCalendarDate />
                  </Ico>
                </Circle>
                <Dec>Dec, 17, 2022</Dec>
              </Date>
            </Dateh>
          </TextHold>
        </Left>
        <Right>
          <Avatar src={images2} />
        </Right>
      </Wrap>
    </Container>
  );
};

export default Hero;
const Dec = styled.h3`
  color: white;
  display: flex;
  align-items: center;
  margin-left: 13px;
`;
const Ico = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #1294c3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Date = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;
const Dateh = styled.div`
  width: 250px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Icons = styled.div`
  color: #1294c3;
  margin-top: 3px;
  margin-left: -5px;
`;
const Box = styled.div`
  width: 260px;
  height: 3px;
  background-color: #1294c3;
`;
const Boxh = styled.div`
  width: 300px;
  height: 7px;
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  height: 100%;
  object-fit: contain;
`;
const Right = styled.div`
  width: 520px;
  display: flex;
  height: 420px;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  width: 570px;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-right: 30px;
  align-items: center;
`;

const Bold = styled.h2`
  color: White;
  margin: 0;
  font-size: 39px;
  display: flex;
  font-style: italic;
  text-align: center;
`;
const TextHold = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

const Text = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
`;
const Images = styled.img`
  width: 300px;
  height: 300px;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 44, 81, 0.3);
  position: absolute;
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url(${images});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  background-color: blue;
  flex-wrap: wrap;
  overflow: hidden;
  /* margin-top: 130px; */
  background-color: red;
`;
