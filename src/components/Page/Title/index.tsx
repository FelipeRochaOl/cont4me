import Link from 'next/link'
import { ReactNode } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { TitleContainer, TitleContent } from './styles'

interface PaginateProps {
  initialPage: number
  endPage: number
}

interface TitleProps {
  children: ReactNode
  paginate: PaginateProps
}

export const Title = ({
  paginate: { initialPage, endPage },
  children
}: TitleProps) => {
  return (
    <TitleContainer>
      <Link href="">
        <HiOutlineChevronLeft size={26} />
      </Link>
      <TitleContent>
        {children}
        <span>
          {initialPage}...{endPage}
        </span>
      </TitleContent>
      <Link href="">
        <HiOutlineChevronRight size={26} />
      </Link>
    </TitleContainer>
  )
}
