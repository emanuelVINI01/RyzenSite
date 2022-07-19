import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Collapse,
  Text,
  PopoverTrigger,
  Popover,
  PopoverContent,
  Image
} from '@chakra-ui/react';
import { Icon, HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} ml={10}>
          <DesktopNav />
        </Flex>
        <Flex alignItems={'left'}>

          <Stack direction={'row'} spacing={7}>
            <Button
              onClick={() => {
                router.push("https://dash.ryzenhost.ovh")
              }}
              color={useColorModeValue('black', 'white')}
              bg={useColorModeValue(null, "#7289DA")}
              _hover={{ "bg": useColorModeValue(null, "") }}
            >
              Área do cliente
            </Button>
            <Button
              onClick={() => {
                router.push("https://discord.ryzenhost.ovh")
              }}
              color={useColorModeValue('black', 'white')}
              bg={useColorModeValue(null, "#7289DA")}
              _hover={{ "bg": useColorModeValue(null, "") }}
            >
              Discord
            </Button>

            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>



          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'gray.500')
  const linkHoverColor = useColorModeValue('black', 'gray.500')
  const popoverContentBgColor = useColorModeValue('gray.200', '#7289DA')
  return (
    <Stack direction={'row'} spacing={7}>

    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={'3'}
      rounded={'md'}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: useColorModeValue(null, 'white') }} fontWeight={600}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'gray.700'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={'white'} p={4} display={{ md: 'none' }}>

    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={7} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={'gray.600'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}


