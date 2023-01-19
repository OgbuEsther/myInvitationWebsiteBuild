import React, { useState, useRef } from "react";
import styled from "styled-components";
import pix from "./Assets/dom.png";
import images from "./Assets/tecback.png";
// import NavComp from "./NavComp";
import html2canvas from "html2canvas";
import { NavLink } from "react-router-dom";

const EnterData: React.FC = () => {
  const [image, setImage] = useState<string>(pix);
  const [name, setName] = useState<string>("");
  const [show, setShow] = useState<Boolean>(false);

  const Toggle = () => {
    setShow(!show)
  }

  const displayPix = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    console.log(save);
  };

  const printRef: any = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div>
      <Container ref={printRef}>
        <Top>Event Registration</Top>
        {/* <NavComp image={image} name={name} /> */}
        
          <ImageInfo>
            <Image src={image} />
            <ImageLabel htmlFor="pix">Enter your Image</ImageLabel>
            <ImageInput
              id="pix"
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              onChange={displayPix}
            />
            <Hold>
              <NameH>
                <Name>Name</Name>
                <Inputs placeholder="Enter your name" type="text" value={name}
                onChange={(e: any) => {
              setName(e.target.value);
            }}/>
              </NameH>
              <NameH>
                <Name>PhoneNo</Name>
                <Inputs placeholder="Enter your phoneNo" type="text" />
              </NameH>
              <Holder>Your Name is: <strong> {name}</strong></Holder>
            </Hold>
          </ImageInfo>{" "}
          {name !== "" && image !== pix ? (
        <button onClick={handleDownloadImage}>Next</button>
      ) : null}
          <Button to="/submit">Submit</Button>

          {/* <Input
            placeholder="Enter your Name Please"
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <br />
          <div>
            Your Name is: <strong> {name}</strong>
          </div>
          <br />
          <br /> */}
          
      </Container>
      
    </div>
  );
};

export default EnterData;
const Prof = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`
const Sub = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: green;
  background-image: url(${images});
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
`
const Button = styled(NavLink)`
  padding: 10px 35px;
  background-color: #000269;
  color: white;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
`
const Holder = styled.div`
  color: white;
  font-size: 20px;
`
const Inputs = styled.input`
  width: 320px;
  margin-left: 30px;
  padding-left: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
`
const Name = styled.h3`
  color: white;
  margin: 0;
  /* margin-left: 35px; */
  /* width: 100%; */
  margin-bottom: 10px;
`
const NameH = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  /* background-color: red; */
  align-items: center;
  padding-bottom: 25px;
  flex-direction: column;
  align-items: center;
`

const Hold = styled.div`
  width: 440px;
  height: 300px;
  background-color: #081D42;
  border: 1px solid #182e58;
  margin-top: -300px;
  border-radius: 10px;
  display: flex ;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
`

const Top = styled.h1`
  color: white;
`

const Input = styled.input`
  border: 1px solid #000269;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
  font-size: 18px;
  ::placeholder {
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  background-color: #000269;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 15px 0;
  margin-bottom: 330px;
  transition: all 360ms;
  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #000269;
  object-fit: cover;
`;

const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* background-color: green; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #081D42;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  position: relative;
`;