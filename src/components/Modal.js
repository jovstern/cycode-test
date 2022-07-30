import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { Modal, ModalBody, ModalOverlay, ModalContent, Grid, ModalHeader, ModalCloseButton, GridItem, Button, ModalFooter } from '@chakra-ui/react';

import {ORGANIZATIONS} from '../services/mock';

export default function Modalush({isOpen, setIsOpen, onSubmit}) {
  const navigate = useNavigate();

  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [usersList, setUsersList] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState(null);

  const handleOpenModal = () => {
    setSelectedOrganization(null);
    setIsOpen(!isOpen);
  };

  const selectOrganization = (selectedOrg) => setSelectedOrganization(selectedOrg.value);

  const selectUsers = (users) => setSelectedUsers(users);

  const submit = () => {
    onSubmit(ORGANIZATIONS.find(org => org.value === selectedOrganization), selectedUsers);
    setIsOpen(false);
    navigate('/');
  };
  
  useEffect(() => {
    setSelectedUsers(null); 

    if (selectedOrganization) {
      const {users} = ORGANIZATIONS.find(org => org.value === selectedOrganization);
      setUsersList(users);
    }

    else {
      setUsersList(null);
    }
  }, [selectedOrganization]);

  return (
    <Modal size={'xl'} closeOnOverlayClick={true} isOpen={isOpen} onClose={handleOpenModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6} >
          <Grid templateColumns='repeat(2, 1fr)' gap={2}>
            <GridItem w='100%' h='100%' >
              <Select options={ORGANIZATIONS} onChange={selectOrganization}/>
            </GridItem>
            <GridItem w='100%' h='100%' >
              <Select options={usersList} isMulti onChange={selectUsers} value={selectedUsers} isDisabled={!selectedOrganization}/>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={submit} isDisabled={!selectedUsers || !selectedUsers.length} colorScheme='blue' mr={3}>
              Save
          </Button>
          <Button onClick={handleOpenModal}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );}

Modalush.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

