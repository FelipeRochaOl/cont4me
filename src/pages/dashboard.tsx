import { ReactElement } from 'react'
import { Balance } from '../components/Balance'
import { CalendarBill } from '../components/CalendarBill'
import { Layout } from '../components/Layout/Dashboard'

const Dashboard = () => {
  return (
    <>
      <Balance />
      <CalendarBill />
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard
