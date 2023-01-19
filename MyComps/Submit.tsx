import React from 'react'
import styled from 'styled-components'
import images from "./Assets/tecback.png";

const Submit = () => {
  return (
    <Container>

    </Container>
  )
}

export default Submit

const Container = styled.div`
    /* position: absolute; */
  width: 100%;
  height: 100vh;
  background-color: green;
  background-image: url(${images});
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`