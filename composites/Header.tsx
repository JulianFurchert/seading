import { styled } from '../stitches.config'
import { Flex, Container, Link, Text, ThemeToggle } from '../components'

const data = [
  {label: 'Studios', href: '/studios'},
  {label: 'Unknown Letter', href: '/unkown-letter'},
  {label: 'About', href: '/about'}
]

type HeaderProps = {
  toggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => (
  <Wrappper>
    <Container>
      <Flex css={{ justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
        <Link href="/">
          Seading
        </Link>
        <Flex>
          {data.map(entry => (
            <Link 
              key={entry.href}
              href={entry.href} 
              css={{ marginRight: '$5' }} 
            >
              {entry.label}
            </Link>
          ))}
          <ThemeToggle toggleTheme={toggleTheme} />
        </Flex>
      </Flex>
    </Container>
  </Wrappper>
)

const Wrappper = styled('div', {
  position: 'sticky',
  top: 0,
  zIndex: 200,
  '&:after': {
    content: '""',
    backgroundColor: '$loContrast',
    opacity: 0.9,
    backdropFilter: 'saturate(2.8) blur(6px)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
  }
})