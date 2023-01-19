import React from "react";
import styled from "styled-components";
import images from "../Assets/techbg.png";
import images2 from "../Assets/vite.png";
import Header from "../My_Header";
import { AiFillStar } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

const My_Hero = () => {
  return (
    <Container>
      <Header />
      <Present>
        CodeLab Set06 Presents <br />{" "}
        <span>
          Tech Conferrence <br /> 2022
        </span>
      </Present>
      <Wrap>
        <Left>
          <TextHold>
            <Text>Theme:</Text>
            <Bold>Tech as a leveller in the 21st century</Bold>
            <Boxh>
              <Box></Box>
              <Icons>
                <AiFillStar />
              </Icons>
            </Boxh>
            <P>
              Technology refers to the use of technical and scientific knowledge
              to create, monitor, and design machinery. Also, technology helps
              in making other goods that aid mankind. <br />
              So come have a feel on how tech works
            </P>
          </TextHold>
        </Left>
        <Right>
          <Avatar src={images2} />
        </Right>
      </Wrap>
      <Dateh>
        <Date>
          <Circle>
            <Ico>
              <BsCalendarDate />
            </Ico>
          </Circle>
          <Dec>Dec, 17, 2022</Dec>
        </Date>
        <Date>
          <Circle>
            <Ico2>
              <BiTimeFive />
            </Ico2>
          </Circle>
          <Dec>10am Prompt </Dec>
        </Date>
        <Date>
          <Circle>
            <Ico2>
              <MdLocationPin />
            </Ico2>
          </Circle>
          <Dec>Ajif LGA </Dec>
        </Date>
      </Dateh>
    </Container>
  );
};

export default My_Hero;
const P = styled.div`
  color: white;
  margin-top: 25px;
  flex-wrap: wrap;
  display: flex;
  /* background-color: red; */
  @media screen and (max-width: 340px) {
    /* font-size: 25px; */
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 15px;
    flex-wrap: wrap;
    /* background-color: red; */
  }
`;
const Present = styled.h1`
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-top: 30px;
  flex-wrap: wrap;
  text-align: center;
  font-size: 25px;

  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
  span {
    font-size: 45px;
    background: -webkit-linear-gradient(#1a2980, #26d0ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 538px) {
      font-size: 35px;
    }
    @media screen and (max-width: 380px) {
      font-size: 28px;
    }
  }
`;
const Dec = styled.h3`
  color: white;
  display: flex;
  align-items: center;
  margin-left: 13px;
`;
const Ico2 = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
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
  @media screen and (max-width: 656px) {
    margin-top: 12px;
  }
`;
const Date = styled.div`
  width: 100%;
  /* height: 50%; */
  display: flex;
`;
const Dateh = styled.div`
  width: 600px;
  /* height: 150px; */
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  /* flex-wrap: wrap; */
  /* background-color: red; */
  @media screen and (max-width: 656px) {
    flex-wrap: wrap;
    width: 300px;
  }
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
  height: 450px;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  @media screen and (max-width: 1088px) {
    margin-top: 25px;
  }
  @media screen and (max-width: 1240px) {
    width: 360px;
    height: 330px;
  }
  @media screen and (max-width: 1142px) {
    width: 380px;
    height: 350px;
  }
  @media screen and (max-width: 584px) {
    width: 340px;
    height: 310px;
  }
  @media screen and (max-width: 584px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 350px) {
    width: 200px;
    height: 190px;
  }
`;
const Left = styled.div`
  width: 570px;
  display: flex;
  height: 100%;
  margin-right: 30px;
`;

const Bold = styled.h2`
  color: White;
  margin: 0;
  font-size: 39px;
  display: flex;
  font-style: italic;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  @media screen and (max-width: 538px) {
    font-size: 32px;
  }
  @media screen and (max-width: 366px) {
    font-size: 27px;
  }
  @media screen and (max-width: 340px) {
    font-size: 25px;
    display: flex;
    justify-content: center;
    width: 100%;
    /* background-color: red; */
  }
`;
const TextHold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* @media screen and (max-width: 338px){
        display: flex;
        justify-content: center;
    } */
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: green; */
  margin-top: 30px;
  @media screen and (max-width: 340px) {
    /* font-size: 25px; */
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
  }
`;

const Text = styled.h1`
  color: white;
  display: flex;
  /* background-color: red; */
  @media screen and (max-width: 366px) {
    font-size: 27px;
  }
  @media screen and (max-width: 340px) {
    font-size: 25px;
    justify-content: center;
    display: flex;
    width: 100%;
  }
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
  /* background-color: red; */
  flex-direction: column;
  padding-bottom: 10px;
  @media screen and (max-width: 340px) {
    /* font-size: 25px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: red; */
  }
`;
