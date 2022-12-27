import Image from 'next/image'
import { FooterContainer } from './styled'

export const Footer = () => {
  return (
    <FooterContainer>
      <Image
        src="/assets/footer-image-pig.svg"
        alt="Homem colocando uma moeda dentro do porquinho"
        width={268.93}
        height={216.83}
      />
    </FooterContainer>
  )
}
