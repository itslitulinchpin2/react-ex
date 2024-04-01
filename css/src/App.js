import logo from './logo.svg';
import './App.css';
import Button1 from './Button1';
import Button2 from './Button2';
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

function App() {
  return (
   <>
   <Button1/>
   <Button2/>
   <Container>
    <Button primary >Button</Button>
    <Button>Button</Button>
   </Container>
   
   </>
  );
}

export default App;
