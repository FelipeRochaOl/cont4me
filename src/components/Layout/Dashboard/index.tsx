import { ReactNode } from 'react'
import { Footer } from '../../Page/Footer'
import { Header } from '../../Page/Header'
import { PageContainer, PageContent, PageMain } from './styles'

interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <PageContainer>
      <PageContent>
        <Header />
        <PageMain>{children}</PageMain>
        <Footer />
      </PageContent>
    </PageContainer>
  )
}
