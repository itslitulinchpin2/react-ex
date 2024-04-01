import React from 'react'

import styled, {css} from 'styled-components';

const Container = styled.div`
  display:flex

`

const Button = styled.button`
  background:transparent;
  border-radius:3px;
  border: 2px solid green;
  color:black;
  margin: 0 1em;
  padding: 0.2em 1em;
  ${(props) => props.primary &&
  css `
  background:pink;
  color:white;`};

`;

export default function StyledComponent() {

  return (
    <div>
      <Container>
        <Button primary >Button</Button>
        <Button>Button</Button>
      </Container>
    </div>
  )
}
