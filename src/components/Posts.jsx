import React from 'react';
import { Flex, Heading, Image, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Posts = ({ API }) => {
  const [{ data, isLoading }] = useFetch(API);

  // Deberia haber una logica que escoja al api si existe la categoria o

  return (
    <Flex
      w='100%'
      h='100%'
      justify='flex-start'
      align='center'
      direction='column'
    >
      <Flex align='flex-start' w='50%'>
        <Heading textAlign='left'>The Latest</Heading>
      </Flex>
      <Flex
        w='100%'
        h='100%'
        justify='flex-start'
        align='center'
        direction='column-reverse'
      >
        {isLoading ? (
          <>
            <Spinner size='xl' />
          </>
        ) : (
          <>
            {(data.data &&
              data.data.map((item) => (
                <Flex
                  direction='column'
                  h='50%'
                  w='50%'
                  align='stretch'
                  justify='space-around'
                  shadow='md'
                  my={10}
                  key={item.id}
                >
                  <Image src='https://picsum.photos/600/600?random' />

                  <Heading
                    as={ReactLink}
                    to={{ pathname: `/post/${item.id}` }}
                    size='xl'
                    my={3}
                    ml={3}
                  >
                    {item.title}
                  </Heading>

                  <Heading as='h4' size='sm' key={item.content} m={5}>
                    {item.content}
                  </Heading>

                  <Heading
                    as={ReactLink}
                    to={{ pathname: `/post/${item.id}` }}
                    size='xs'
                    textAlign='right'
                    m={3}
                  >
                    Keep reading
                  </Heading>
                </Flex>
              ))) ||
              (data.posts &&
                data.posts.map((item) => (
                  <Flex
                    direction='column'
                    h='50%'
                    w='50%'
                    align='stretch'
                    justify='space-around'
                    shadow='md'
                    my={10}
                    key={item.id}
                  >
                    <Image src='https://picsum.photos/600/600?random' />

                    <Heading
                      as={ReactLink}
                      to={{ pathname: `/post/${item.id}` }}
                      size='xl'
                      my={3}
                      ml={3}
                    >
                      {item.title}
                    </Heading>

                    <Heading as='h4' size='sm' key={item.content} m={5}>
                      {item.content}
                    </Heading>

                    <Heading
                      as={ReactLink}
                      to={{ pathname: `/post/${item.id}` }}
                      size='xs'
                      textAlign='right'
                      m={3}
                    >
                      Keep reading
                    </Heading>
                  </Flex>
                )))}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Posts;
