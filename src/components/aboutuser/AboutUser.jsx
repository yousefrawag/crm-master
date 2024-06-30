import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import userImage from "../../assets/images/user.png";
import "./AboutUser.scss";
import { useState } from "react";
const AboutUser = () => {

  return (
    <div className='about-user'>
        <div className="settings">
            <div className="single_settings notification dropdown">
            <button
            type="button" data-toggle="dropdown" aria-expanded="false" >
            <IoIosNotificationsOutline />
            <span></span>
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">
      الاشعارات
    </a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
            </div>
            <div className="single_settings">
            <IoSettingsOutline />
            </div>
            <div className="single_settings">
            <IoSettingsOutline />
            </div>
        </div>
        <div className="main-user dropdown">
        <button  type="button" data-toggle="dropdown" aria-expanded="false">
            <div className="user-name">
                <div className="user-img"><img src={userImage} alt="user" /></div>
                <div className="text">
                    <h5>علي محمد</h5>
                    <p>موظف</p>
                </div>
            </div>
            <div className="icon-down">
            <FaChevronDown />
            </div>
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">
    إعدادات الحساب <IoSettingsOutline />
    </a>
    <a className="dropdown-item" href="#" > تسجيل خروج <IoMdLogOut /> </a>
  </div>
        </div>
    </div>
  )
}

export default AboutUser