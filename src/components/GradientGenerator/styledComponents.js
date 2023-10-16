// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: ${props =>
    props.gradient === true &&
    `linear-gradient(${props.color1}, ${props.color2})`};
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: normal;
`

export const GradientContainer = styled.div`
display:flex;
justify-content:space-between
align-items:center;
width:70%;
`

export const GradientItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-size: 20px;
  padding: 5px;
`

export const Unordered = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

/* export const Input = styled.input`
  width: 60%;
` */
