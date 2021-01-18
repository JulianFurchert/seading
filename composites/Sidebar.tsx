import { Flex, Box } from '../components'

type SidebarProps = {}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <Flex
      css={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
      }}
    >
      {children}
    </Flex>
  )
}