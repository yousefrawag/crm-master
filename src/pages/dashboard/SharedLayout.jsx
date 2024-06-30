import { Outlet } from 'react-router-dom'
import {Sidebar, Topbar} from "../../components"
import "./SharedLayout.scss"
const SharedLayout = () => {
  return (
    <>
    <main className='dashboard'>
      <Sidebar/>
      <div>
        <Topbar/>
        <div className="dashboard-page">
          <Outlet/>
        </div>
      </div>
    </main>
    </>
  )
}

export default SharedLayout