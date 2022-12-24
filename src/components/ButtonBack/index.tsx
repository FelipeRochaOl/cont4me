import { useRouter } from 'next/router'
import { ButtonHTMLAttributes } from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { ButtonContainer } from './styles'

interface IButtonBackProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeIcon?: number
}

export const ButtonBack = ({ sizeIcon = 26 }: IButtonBackProps) => {
  const router = useRouter()
  return (
    <ButtonContainer onClick={() => router.back()} style={{ height: sizeIcon }}>
      <HiOutlineChevronLeft size={sizeIcon} />
    </ButtonContainer>
  )
}
