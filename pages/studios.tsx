import { Container, Text, Box, Flex } from '../components'
import { styled } from '../stitches.config'
import { Info } from 'react-feather'
import * as Collapsible from '@radix-ui/react-collapsible';

export default function Studios() {
  return (
    <Container>
      <Box css={{marginTop: '$12'}}>
        <Text variant="headline2">Studios we visited</Text>
      </Box>
      <Box css={{marginTop: '$12'}}>
        <Studio
          name="Somewhere Else"
          link=""
          city="Singapore"
          country="Singapore"
        />
        <Studio
          name="Somewhere Else"
          link=""
          city="Singapore"
          country="Singapore"
        />
      </Box>
    </Container>
  );
}


type StudioProps = {
  name: string,
  link: string,
  city: string,
  country: string
}

const Studio: React.FC<StudioProps> = ({ name }) => {
  return (
    <Box css={{ marginTop: '$14' }}>
      <Collapsible.Root>
        <Flex
          css={{
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid', 
            borderColor: '$gray2',
            padding: '$4 0', 
          }}
        >
          <Text variant="headline">
            {name}
          </Text>
          <CollapsibleButton>
            <Text css={{ marginRight: '$1', color: 'inherit' }} >
              More info
            </Text>
            <Info size={18} />
          </CollapsibleButton>
        </Flex>
        <CollapsibleContent>
          <Text>
            Test
          </Text>
        </CollapsibleContent>
      </Collapsible.Root>
    </Box>
  )
}

const CollapsibleButton = styled(Collapsible.Button, {
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  color: '$gray8',
  cursor: 'pointer',
  '&:hover': {
    color: '$gray6'
  }
})

const CollapsibleContent = styled(Collapsible.Content, {
  padding: '$4 0',
})