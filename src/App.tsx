import React from 'react';
import './style/style.css';  
import Home from './components/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container id="stars">
      <Home />
    </Container>
  );
}

export default App;