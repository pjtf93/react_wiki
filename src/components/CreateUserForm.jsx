import React, { useState } from 'react';
import { Flex, Heading, FormControl, Input, Button } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { addNewUser } from '../features/users/usersSlice';

const CreateUserForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const handleSubmitUser = async () => {
    try {
      const resultUser = await dispatch(
        addNewUser({
          first_name,
          last_name,
          email,
          password,
        })
      );
      unwrapResult(resultUser);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  return (
    <Flex
      width='30%'
      height='70%'
      direction='column'
      justify='space-around'
      align='stretch'
      border='solid'
      p={5}
    >
      <Flex h='15%' justify='center' p={4}>
        <Heading>Create an Account</Heading>
      </Flex>
      <Flex as='form' direction='column' h='70%'>
        <FormControl
          h='100%'
          isRequired
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
          p={6}
        >
          <Input
            placeholder='Nombre'
            type='text'
            value={first_name}
            onChange={onFirstNameChanged}
          />
          <Input
            placeholder='Apellido'
            type='text'
            value={last_name}
            onChange={onLastNameChanged}
          />
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={onEmailChanged}
          />
          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={onPasswordChanged}
          />
          <Button type='button' onClick={handleSubmitUser}>
            Sign Up
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default CreateUserForm;
