import { useState } from 'react';
import { Container, Text, Box, Flex, Link } from '../components';
import { Plus, Minus } from 'react-feather';
import * as Collapsible from '@radix-ui/react-collapsible';
import { styled } from '../stitches.config';
import studios, { Studio } from '../studios';
import Image from 'next/image' 

export default function Studios() {
  return (
    <Container>
      <Box css={{marginTop: '$12'}}>
        <Text variant="headline">Studios we visited</Text>
      </Box>
      <Box css={{marginTop: '$12'}}>
        {studios.map(studio => <StudioItem {...studio} />)}
      </Box>
    </Container>
  );
}

type StudioProps = Studio & {}

const StudioItem: React.FC<StudioProps> = ({ name, city, country, visited, link, linkLabel = 'Website', images }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      label: 'City',
      value: city
    },
    {
      label: 'Country',
      value: country
    },
    {
      label: 'Visited',
      value: visited
    }
  ]

  return (
    <Box css={{ marginTop: '$14' }}>
      <Collapsible.Root onOpenChange={setIsOpen}>
        <Flex
          css={{
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid', 
            borderColor: '$gray2',
            padding: '$4 0', 
          }}
        >
          <Text variant="headline2">
            {name}
          </Text>
          <CollapsibleButton>
            <Text css={{ marginRight: '$1', color: 'inherit' }} >
              More info
            </Text>
            {isOpen ?  <Minus size={18} /> :  <Plus size={18} />}
          </CollapsibleButton>
        </Flex>
        <CollapsibleContent>
          <Flex>
            <Text css={{ marginRight: '$4', color: '$gray6' }}>
              <Link href={link}>
                {linkLabel}
              </Link>
            </Text>
            {data.map(i => (
              <Flex css={{ marginRight: '$4'}}>
                <Text css={{ marginRight: '$1' }}>
                  {i.label}:
                </Text>
                <Text css={{ color: '$gray6' }}>
                  {i.value}
                </Text>
              </Flex>
            ))}
          </Flex>
        </CollapsibleContent>
      </Collapsible.Root>
      <Box css={{ marginTop: '$6'}}>
        {images.map(row => (
          <Flex style={{  margin: '0 -5px' }}>
            {row.map(img => (
              <Box
                css={{
                  backgroundColor: '$gray1',
                  margin: '$1'
                }} 
                style={{ 
                  flex: `calc(${img.width}/${img.height})`,
                }}
                >
                <Image
                  src={`/img/interviews/${img.name}`}
                  sizes="50vw"
                  height={img.height}
                  width={img.width}
                  layout="responsive"
                />
              </Box>
            ))}
          </Flex>
        ))}
      </Box>
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