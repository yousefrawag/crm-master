import {BreadCrumb, Searchbar, AboutUser} from "../../components";
import "./Topbar.scss"
const Topbar = () => {
  return (
    <div className="Topbar">
              <div className="container">
               <div className="main-topbar">
                <div className="main-breadCrumb">
                  <BreadCrumb/>
                </div>
                <div className="topbar-search">
                  <Searchbar/>
                </div>
                <div className="setting-profile">
                  <AboutUser/>
                </div>
               </div>
              </div>
    </div>
  )
}

export default Topbar