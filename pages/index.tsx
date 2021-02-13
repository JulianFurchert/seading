import { Container, Text, Box, FloatingGallery, Flex, FloatingImage } from '../components'

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
                a lovely memory of a design journey
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container>
          <FloatingGallery>
            <Flex 
              css={{ 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}
            >
              <FloatingImage 
                src="/img/interviews/DSCF4562.jpg"
                width={4896}
                height={3264}
                layoutWidth="45%"
              />
              <FloatingImage 
                src="/img/interviews/_DSF3432.jpg"
                width={3264}
                height={4896}
                layoutWidth="30%"
              />
            </Flex>
            <Flex 
              css={{ 
                justifyContent: 'center', 
                margin: '300px 0' 
              }}
            >
              <FloatingImage 
                src="/img/interviews/DSCF4741.jpg"
                width={4896}
                height={3264}
                layoutWidth="50%"
              />
            </Flex>
            <Flex 
              css={{ 
                justifyContent: 'space-between', 
                alignItems: 'flex-end',
                margin: '200px 0' 
              }}
            >
              <FloatingImage 
                src="/img/interviews/_DSF3402.jpg"
                width={4896}
                height={3264}
                layoutWidth="35%"
              />
              <FloatingImage 
                src="/img/interviews/IMG_1922.jpg"
                width={4896}
                height={3264}
                layoutWidth="45%"
              />
            </Flex>
            <Flex 
              css={{ 
                justifyContent: 'space-between', 
                alignItems: 'flex-end', 
                margin: '200px 0' 
              }}
            >
              <FloatingImage 
                src="/img/interviews/DSCF4907.jpg"
                width={4896}
                height={3264}
                layoutWidth="40%"
                margin="0 0 40px"
              />
              <FloatingImage 
                src="/img/interviews/_DSF3410.jpg"
                width={3264}
                height={4896}
                layoutWidth="30%"
              />
            </Flex>
          </FloatingGallery>
        </Container>
      </Box>
    </Box>
  );
}