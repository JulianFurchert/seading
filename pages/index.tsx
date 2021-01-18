import { Container, Text, Box, Flex } from '../components'

export default function Home() {
  return (
    <Box css={{ position: 'relative' }}>
      <Box 
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <Container>
          <Flex
            css={{
              height: '80vh',
              alignItems: 'center',
            }}
          >
            <Text variant="large">
              Seading
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box
            css={{
              height: '300vh'
            }}
          >

          </Box>
        </Container>
      </Box>
    </Box>
  );
}