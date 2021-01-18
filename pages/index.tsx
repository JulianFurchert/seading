import { Container, Text, Box, FloatingGallery, FloatingImage, Flex } from '../components'

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
            <Box>
              <Text variant="large">
                Seading
              </Text>
              <Text variant="headline">
                a lovely trip memory
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container>
          <FloatingGallery>
            <Flex css={{ justifyContent: 'space-between' }}>
              <FloatingImage />
              <FloatingImage />
            </Flex>
            <Flex css={{ justifyContent: 'space-between', margin: '$10 0' }}>
              <FloatingImage />
              <FloatingImage />
            </Flex>
            <Flex css={{ justifyContent: 'center', margin: '$10 0' }}>
              <FloatingImage />
            </Flex>
            <Flex css={{ justifyContent: 'space-between', margin: '$10 0' }}>
              <FloatingImage />
              <FloatingImage />
            </Flex>
            <Flex css={{ justifyContent: 'center', margin: '$10 0' }}>
              <FloatingImage />
            </Flex>
            <Flex css={{ justifyContent: 'space-between', margin: '$10 0' }}>
              <FloatingImage />
              <FloatingImage />
            </Flex>
          </FloatingGallery>
        </Container>
      </Box>
    </Box>
  );
}