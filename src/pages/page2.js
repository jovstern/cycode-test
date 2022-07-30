import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Box,
  Button,
} from '@chakra-ui/react';

import Header from '../components/Header.js';
import Nav from '../components/Nav.js';
import Modalush from '../components/Modal.js';

export default function Page2({onSubmit}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <Container mt={10}>
      <Header />
      <Nav />
      <Box mt={75}>
        <Button onClick={handleOpenModal} colorScheme='blue'>Open Modal</Button>
      </Box>
      <Modalush setIsOpen={setIsOpen} isOpen={isOpen} onSubmit={onSubmit}/>
    </Container>
  );
}

Page2.propTypes = {
  onSubmit: PropTypes.func.isRequired
};