import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import {Stack, ButtonGroup, Button} from '@chakra-ui/react';
import {PAGES} from '../services/mock';

export default function Page2() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack direction='row' mt={5} align='center'>
      <ButtonGroup size='sm' isAttached variant='outline'>
        {Object.keys(PAGES).map(page => {
          const {route, title} = PAGES[page];
          return (
            <Button key={page} onClick={() => {navigate(route);}} colorScheme='teal' variant={location.pathname === route ? 'solid' : 'outline'}>{title}</Button>
          );
        })}
      </ButtonGroup>
    </Stack>
  );}