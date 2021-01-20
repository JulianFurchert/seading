import { styled } from '../stitches.config'
import { Link, Flex, Container } from '../components'

const data = [
  { label: 'Eve Jazmati', href: 'https://evejazmati.com/' },
  { label: 'Julian Furchert', href: 'https://julianfurchert.com/' },
  { label: 'Github', href: 'https://github.com/JulianFurchert' },
]

export const Footer: React.FC = () => (
  <Wrappper>
    <Container>
      <Flex css={{alignItems: 'center', height: 100}}>
        {data.map(entry => (
          <Link 
            key={entry.href}
            external={true} 
            href={entry.href} 
            css={{marginRight: '$3'}} 
          >
            {entry.label}
          </Link>
        ))}
      </Flex>
    </Container>
  </Wrappper>
)

const Wrappper = styled('div', {
  backgroundColor: '$gray1'
})