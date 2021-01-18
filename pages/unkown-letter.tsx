import { Container, Text, Box, Paragraph } from '../components'

export default function UnknownLetter() {
  return (
    <Container>
      <Box css={{marginTop: '$12'}}>
        <Text variant="headline">Unknown Letter</Text>
      </Box>
      <Box css={{ maxWidth: 1200, marginTop: '$4' }}>
        <Paragraph >
          This is a series of posters created in cooperation with designers from Singapore, Thailand and Malaysia. During our journey through Southeast Asia we were captivated by all the letterings/script/writings we couldn’t read or comprehend. This is what inspired my partner and I to create our own fictitious type (lettering), which we gave the designers. Much like the unknown shapes and fonts we had seen, this writing was unknown to the designers. We were curious to find out, what the designers would do with these new, unknown (and cryptic) letters. The work you see below is what transpired from this.
        </Paragraph>
        <Paragraph>
          The theme of this series is „Communication with the Unknown
        </Paragraph>
      </Box>
    </Container>
  );
}