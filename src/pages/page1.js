import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import {Container, Box, Button, Heading} from '@chakra-ui/react';

import Header from '../components/Header.js';
import Nav from '../components/Nav.js';
import {PAGES} from '../services/mock';

export default function Page1({users, organization}) {
  const navigate = useNavigate();
  const {page2} = PAGES;

  const handleClick = () => {
    navigate(page2.route);
  };

  return (
    <Container mt={10}>
      <Header />
      <Nav />
      <Box mt={55}>
        <Heading as='h2' size={users && organization ? 'md' : '3xl'} noOfLines={1} color='gray.500' >
          {users && organization ? `You have selected: ${organization.label} and ${users.map(user => user.label).join(', ')}` : 'Welcome to the app'}
        </Heading>
        <Button mt={5} onClick={handleClick} colorScheme='teal' variant='solid'>
          Go to Page 2 →
        </Button>
      </Box>
    </Container>
  );
}

Page1.defaultProps = {
  users: null,
  organization: null
};

Page1.propTypes = {
  users: PropTypes.array,
  organization: PropTypes.object,
};
