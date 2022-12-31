import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import {
  FaEdit,
  FaEye,
  FaFileImport,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaPlus,
  FaTrash
} from 'react-icons/fa'
import { HiCheckCircle, HiOutlineChevronRight } from 'react-icons/hi'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { Layout } from '../components/Layout/Dashboard'
import { ButtonSubmit } from '../components/Page/Form/ButtonSubmit'
import { Title } from '../components/Page/Title'
import {
  Breadcrumbs,
  FormImport,
  HeaderListPage,
  InputFile,
  LinkContainer,
  ListContainer,
  ListContent,
  ListHeader
} from '../styles/pages/people'

const People = () => {
  return (
    <section>
      <HeaderListPage>
        <Breadcrumbs>
          <Link href={'#'}>Pessoas</Link>
          <HiOutlineChevronRight size={12} />
          <Link href={'#'}>Importação</Link>
        </Breadcrumbs>
        <FormImport action="/">
          <InputFile>
            <FaFileImport size={36} />
            <label htmlFor="import">Arquivo</label>
            <input type="file" id="import" name="import" hidden />
          </InputFile>
          <ButtonSubmit>Importar</ButtonSubmit>
        </FormImport>
        <LinkContainer>
          <Link href={'#'}>
            Modelo
            <Image
              src="/assets/icon-microsoftexcel.svg"
              alt="Icone do microsoft excel"
              width={30}
              height={29.453}
            />
          </Link>
        </LinkContainer>
        <Title paginate={{ initialPage: 1, endPage: 10 }}>
          <h1>Importar Pessoas</h1>
        </Title>
      </HeaderListPage>
      <ListContainer>
        <ListHeader>
          <ImCheckboxUnchecked size={20} className="checkbox" />
          <ImCheckboxChecked size={20} className="checkbox" display="none" />
          <button className="cnpj">
            <span>CNPJ/CPF</span>
            <FaLongArrowAltDown size={20} display="none" />
            <FaLongArrowAltUp size={20} display="none" />
          </button>
          <button className="name">
            <span>Nome</span>
            <FaLongArrowAltDown size={20} />
            <FaLongArrowAltUp size={20} display="none" />
          </button>
          <button className="phone">
            <span>Telefone</span>
            <FaLongArrowAltDown size={20} display="none" />
            <FaLongArrowAltUp size={20} display="none" />
          </button>
          <div className="action">
            <span>Ações</span>
            <FaLongArrowAltDown size={20} display="none" />
            <FaLongArrowAltUp size={20} display="none" />
          </div>
        </ListHeader>
        <ListContent>
          <HiCheckCircle size={20} className="checkbox" />
          <div className="cnpj">
            <span>00.000.000/0000-00</span>
          </div>
          <div className="name">
            <span>Abastecedora Jaborandi</span>
            <span>Baronesa</span>
          </div>
          <div className="phone">
            <span>(35) 0000-0000 - Marcos</span>
            <span>(35) 00000-0000 - Marcos</span>
          </div>
          <div className="action">
            <FaEdit size={23} />
            <FaEye size={27} />
            <FaTrash size={20} />
            <FaPlus size={20} display="none" />
          </div>
        </ListContent>
        <ListContent>
          <HiCheckCircle size={25} className="checkbox" display="none" />
          <div className="cnpj">
            <span>00.000.000/0000-00</span>
          </div>
          <div className="name">
            <span>Abastecedora Jaborandi</span>
            <span>Baronesa</span>
          </div>
          <div className="phone">
            <span>(35) 0000-0000 - Marcos</span>
            <span>(35) 00000-0000 - Marcos</span>
          </div>
          <div className="action">
            <FaEdit size={23} />
            <FaEye size={27} />
            <FaTrash size={20} />
            <FaPlus size={20} display="none" />
          </div>
        </ListContent>
      </ListContainer>
    </section>
  )
}

People.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default People
