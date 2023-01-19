import React, { useState } from "react";
import styled from "styled-components";
import bgImg from "./images/mainpicedit.jpg";

const Enterdata: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");

  const displayPic = (e: any) => {
    console.log(e);
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
  };

  return (
    <Container>
      <Wrapper>
        <Imageinfo>
          <Image src={image} />
          <ImageLabel htmlFor="pix">Enter your image please</ImageLabel>
          <Imageinput
            id="pix"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={displayPic}
          />
        </Imageinfo>

        <Input placeholder="Enter your name" />
      </Wrapper>
    </Container>
  );
};

export default Enterdata;

const Input = styled.input`
  border: 1px solid blue;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
  font-size: 20px;
  z-index: 1;
`;
const Imageinput = styled.input`
  display: none;
`;
const ImageLabel = styled.label`
  background-color: black;
  color: white;
  padding: 15px 20px;
  border-radius: 15px;
  margin: 15px 0;
  transition: all 360ms;
  z-index: 1;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid blue;
  object-fit: cover;
  z-index: 1;
`;
const Imageinfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  /* border-radius: 10px; */

  ::before {
    content: "";
    width: 300px;
    height: 410px;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    /* border-radius: 10px; */
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: darkgray;
`;
