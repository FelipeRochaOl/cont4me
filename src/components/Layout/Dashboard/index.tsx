import { ReactNode } from 'react'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
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
