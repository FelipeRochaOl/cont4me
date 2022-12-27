import * as Avatar from '@radix-ui/react-avatar'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FaEdit, FaEnvelope, FaPhoneAlt, FaUserAlt } from 'react-icons/fa'
import { ImKey } from 'react-icons/im'
import { ButtonBack } from '../components/Page/ButtonBack'
import { ButtonSubmit } from '../components/Page/Form/ButtonSubmit'
import { Input } from '../components/Page/Form/Input'
import {
  Container,
  ProfileContainer,
  UserAvatar,
  UserContainer
} from '../styles/pages/profile'

type ProfileFormInputs = {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const Profile = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ProfileFormInputs>()
  const [activeField, setActiveField] = useState('name')

  const onSubmit: SubmitHandler<ProfileFormInputs> = ({
    name,
    email,
    phone,
    password,
    confirmPassword
  }) => {
    console.log({ name, email, phone, password, confirmPassword })
  }
  return (
    <Container>
      <ProfileContainer>
        <h1>Profile</h1>
        <UserContainer>
          <ButtonBack />
          <UserAvatar>
            <Avatar.Root className="avatarContent">
              <Avatar.Image
                className="avatarImage"
                src="https://avatars.githubusercontent.com/u/13703006?v=4&w=283&h=283&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <Avatar.Fallback className="avatarFallback" delayMs={600}>
                FR
              </Avatar.Fallback>
            </Avatar.Root>
            <FaEdit size={20} />
          </UserAvatar>
        </UserContainer>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  focused={activeField === 'name'}
                  icon={<FaUserAlt size={25} />}
                  type="text"
                  placeholder="Nome"
                  onFocus={() => setActiveField('name')}
                  {...field}
                  error={errors.name}
                />
              )
            }}
          />
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
            name="phone"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  focused={activeField === 'phone'}
                  icon={<FaPhoneAlt size={25} />}
                  type="text"
                  placeholder="Telefone"
                  onFocus={() => setActiveField('phone')}
                  {...field}
                  error={errors.phone}
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
                  placeholder="Senha"
                  onFocus={() => setActiveField('password')}
                  {...field}
                  error={errors.password}
                />
              )
            }}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  focused={activeField === 'confirmPassword'}
                  icon={<ImKey size={25} />}
                  type="password"
                  placeholder="Confirmar Senha"
                  onFocus={() => setActiveField('confirmPassword')}
                  {...field}
                  error={errors.confirmPassword}
                />
              )
            }}
          />
          <ButtonSubmit type="submit" isBig>
            Salvar
          </ButtonSubmit>
        </form>
        <footer>
          <Image
            src={'/assets/logo-mini-green-footer.svg'}
            alt="Mini logomarca cont4me verde"
            width={215.98}
            height={53.12}
          />
        </footer>
      </ProfileContainer>
    </Container>
  )
}

export default Profile
