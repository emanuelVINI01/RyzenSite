import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Button,
  MenuDivider
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiServer,
  FiPlay,
  FiGlobe,
  FiCloud
} from 'react-icons/fi';
import {
  RiFilePaper2Fill
} from 'react-icons/ri'
import {
  ChevronDownIcon
} from '@chakra-ui/icons'
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useRouter } from 'next/router';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Início', icon: FiHome, href: "/" },

];

export default function SideBar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />

        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter()
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="ryzen.png" width="70px" alt="RyzenHosting" />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={() => router.push(link.href)}>
          {link.name}
        </NavItem>
      ))}


      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Menu>
          <Icon
            fontSize="16"
            as={FiPlay}
          />
          <MenuButton as={Button} colorScheme={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.900')} _hover={null} _focus={null}>
            Host de Jogos
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              router.push("/minecraft")
            }}>Minecraft</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Menu>
          <Icon
            fontSize="16"
            as={FiGlobe}
          />
          <MenuButton as={Button} colorScheme={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.900')} _hover={null} _focus={null} >
            Host de Sites
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              router.push("/cpanel")
            }}>cPanel</MenuItem>
            <MenuItem onClick={() => {
              router.push("/cpanelrevenda")
            }}>Revenda cPanel</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Menu>
          <Icon
            fontSize="16"
            as={FiCloud}
          />
          <MenuButton as={Button} colorScheme={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.900')} _hover={null} _focus={null} >
            Host de Sistemas
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              router.push("/apps")
            }}>Aplicações</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Menu>
          <Icon
            fontSize="16"
            as={FiServer}
          />
          <MenuButton as={Button} colorScheme={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.900')} _hover={null} _focus={null} >
            Host de Servidores
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              router.push("/vps")
            }}>Servidores VPS</MenuItem>
            <MenuItem onClick={() => {
              router.push("/vpsgaming")
            }}>Servidores VPS Gaming</MenuItem>
          </MenuList>
          
        </Menu>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Menu>
          <Icon
            fontSize="16"
            as={FiCloud}
          />
          <MenuButton as={Button} colorScheme={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.900')} _hover={null} _focus={null} >
            Host de Sistemas
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              router.push("/apps")
            }}>Aplicações</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        <Menu>
          <Icon
            fontSize="16"
            as={RiFilePaper2Fill}
          />
          <MenuButton as={Button} colorScheme={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.900')} _hover={null} _focus={null} >
            Termos e Políticas
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => {
              router.push("/serviceterms")
            }}>Termos de Serviço</MenuItem>
            <MenuItem onClick={() => {
              router.push("/privacypolicy")
            }}>Política de Privacidade</MenuItem>
          </MenuList>
          
        </Menu>
      </Flex>
    </Box >
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        <Image src="ryzen.png" width="70px" alt="RyzenHosting" />
      </Text>
    </Flex>
  );
};
