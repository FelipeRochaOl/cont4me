import * as Avatar from '@radix-ui/react-avatar'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Separator from '@radix-ui/react-separator'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaEdit, FaLightbulb } from 'react-icons/fa'

import {
  HeaderContainer,
  HeaderContent,
  HeaderPrincipal,
  NavigationMenuLinkIcon,
  UserAvatar,
  UserContainer,
  UserContent
} from './styles'

export const Header = () => {
  const router = useRouter()

  return (
    <HeaderContainer>
      <HeaderPrincipal>
        <HeaderContent>
          <Image
            src={'/assets/logo-mini.svg'}
            alt="Logo cont for me"
            width={215.98}
            height={53.12}
          />
          <NavigationMenu.Root>
            <NavigationMenu.List className="navigationMenuList">
              <NavigationMenu.Item className="navigationMenuItem">
                <NavigationMenu.Link asChild>
                  <Link
                    href="/dashboard"
                    className={router.asPath === '/dashboard' ? 'active' : ''}
                  >
                    Dashboard
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className={'navigationMenuItem'}>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/bills"
                    className={router.asPath === '/bills' ? 'active' : ''}
                  >
                    Contas
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="navigationMenuItem">
                <NavigationMenu.Link asChild>
                  <Link
                    href="/people"
                    className={router.asPath === '/people' ? 'active' : ''}
                  >
                    Pessoas
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="navigationMenuItem">
                <NavigationMenu.Link asChild>
                  <Link
                    href="/finances"
                    className={router.asPath === '/finances' ? 'active' : ''}
                  >
                    Financeiro
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="navigationMenuItem">
                <NavigationMenu.Link asChild>
                  <Link
                    href="/calendar"
                    className={router.asPath === '/calendar' ? 'active' : ''}
                  >
                    Calendário
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="navigationMenuItem">
                <NavigationMenu.Link asChild>
                  <NavigationMenuLinkIcon>
                    <Link
                      href="/goals"
                      className={router.asPath === '/goals' ? 'active' : ''}
                    >
                      Metas
                    </Link>
                    <FaLightbulb size={16} />
                  </NavigationMenuLinkIcon>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </HeaderContent>

        <UserContainer>
          <UserContent>
            Bem Vindo
            <span>Felipe Rocha Oliveira</span>
          </UserContent>
          <Link href="/profile">
            <UserAvatar>
              <Avatar.Root className="avatarContent">
                <Avatar.Image
                  className="avatarImage"
                  src="https://avatars.githubusercontent.com/u/13703006?v=4&w=86&h=86&dpr=2&q=80"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback className="avatarFallback" delayMs={600}>
                  FR
                </Avatar.Fallback>
              </Avatar.Root>
              <FaEdit size={15} />
            </UserAvatar>
          </Link>
        </UserContainer>
      </HeaderPrincipal>

      <Separator.Root className="SeparatorRoot" />
    </HeaderContainer>
  )
}
