import {Component} from 'react'
import {
  Container,
  Heading,
  Paragraph,
  Unordered,
  GradientContainer,
  GradientItem,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {color1: '#8ae323', color2: '#014f7b', gradient: false}

  colorOneChange = event => this.setState({color1: event.target.value})

  colorTwoChange = event => this.setState({color1: event.target.value})

  clickGenerate = () => this.setState({gradient: true})

  render() {
    const {color1, color2, gradient} = this.state
    return (
      <Container gradient={gradient} color1={color1} color2={color2}>
        <Heading>Generate a css color Gradient</Heading>
        <Paragraph>Choose a Direction</Paragraph>
        <Unordered>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem key={each.directionId} each={each} />
          ))}
        </Unordered>
        <Paragraph>Pick the Colors</Paragraph>
        <GradientContainer>
          <GradientItem>
            <Paragraph>#8ae323</Paragraph>
            <input onChange={this.colorOneChange} type="color" />
          </GradientItem>
          <GradientItem>
            <Paragraph>#014f7b</Paragraph>
            <input onChange={this.colorTwoChange} type="color" />
          </GradientItem>
        </GradientContainer>
        <GenerateButton onClick={this.clickGenerate}>Generate</GenerateButton>
      </Container>
    )
  }
}

export default GradientGenerator
