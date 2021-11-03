import type { NextPage } from 'next';
import { Button, Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Next.js / Auth0 Example <br />
        </Heading>
        <Text color={'gray.500'}>Let&#39;s try some authentication.</Text>

        <Text color={'gray.500'}>
          {isLoading && 'Loading...'}
          {error && `Error loading auth status: ${error.message}`}
          {user && `Welcome, ${user.name}.`}
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Button
            as='a'
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            href='/api/auth/login'
          >
            Login
          </Button>
          <Button
            as='a'
            variant={'link'}
            colorScheme={'blue'}
            size={'sm'}
            href='/api/auth/logout'
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
