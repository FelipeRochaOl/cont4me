import Image from 'next/image'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FaEnvelope } from 'react-icons/fa'
import { ImKey } from 'react-icons/im'
import { ButtonSubmit } from '../components/Page/Form/ButtonSubmit'

import { Input } from '../components/Page/Form/Input'
import { useTheme } from '../hooks/useTheme'
import {
  Container,
  Fieldset,
  FormContainer,
  HomeContainer
} from '../styles/pages/home'

type LoginFormInputs = {
  email: string
  password: string
}

export default function Home() {
  const { theme } = useTheme()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<LoginFormInputs>()
  const [activeField, setActiveField] = useState('email')

  const onLogin: SubmitHandler<LoginFormInputs> = ({ email, password }) => {
    console.log({ email, password })
  }

  return (
    <Container className={theme}>
      <HomeContainer>
        <FormContainer onSubmit={handleSubmit(onLogin)} noValidate>
          <Image
            src="/assets/logo-light.svg"
            width={431.94}
            height={107.28}
            alt=""
          />
          <Fieldset>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    focused={activeField === 'email'}
                    icon={<FaEnvelope size={25} />}
                    type="email"
                    placeholder="E-mail"
                    onFocus={() => setActiveField('email')}
                    {...field}
                    error={errors.email}
                  />
                )
              }}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    focused={activeField === 'password'}
                    icon={<ImKey size={25} />}
                    type="password"
                    placeholder="Password"
                    onFocus={() => setActiveField('password')}
                    {...field}
                    error={errors.email}
                  />
                )
              }}
            />

            <ButtonSubmit type="submit" isBig>
              Entrar
            </ButtonSubmit>
          </Fieldset>
        </FormContainer>
        <Image
          src="/assets/image-home.svg"
          alt="Homem visualizando um gráfico em barras"
          width={835.21}
          height={613.1}
        />
      </HomeContainer>
    </Container>
  )
}
