import React, { useState } from 'react';
import { Flex, Heading, FormControl, Input, Button } from '@chakra-ui/core';

const API = 'https://dry-beyond-85304.herokuapp.com/api/usuarios';

const Register = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    let body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };

    fetch(API, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ first_name, last_name, email, password }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(body);
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
      <Flex as='form' direction='column' h='70%' onSubmit={handleSubmit}>
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
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Input
            placeholder='Apellido'
            type='text'
            value={last_name}
            onChange={(event) => setLastName(event.target.value)}
          />
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type='submit'>Sign Up</Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Register;
