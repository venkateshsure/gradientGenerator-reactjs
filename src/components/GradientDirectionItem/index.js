// Write your code here

import {Button, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {each} = props
  const {displayText} = each
  return (
    <List>
      <Button>{displayText}</Button>
    </List>
  )
}

export default GradientDirectionItem
