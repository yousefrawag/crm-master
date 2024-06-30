import React, { useState } from "react";
/* import {SideBar} from "../../assets/Data/Data"; */
import logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { GiStabbedNote } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdLibraryAddCheck } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaAngleLeft, FaChevronDown } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [showDropdown, setShowDrobdown] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <section className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">
              <FaHome /> <p>الرئيسية</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={pathName === "/AddProject" ? "active" : null}>
              <PiBuildingsFill /> <p>المشاريع</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/mission">
              {" "}
              <GiStabbedNote /> <p>المهام</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports">
              {" "}
              <TbReportSearch /> <p>التقارير</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoices">
              {" "}
              <FaFileInvoice />
              <p>الفواتير</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" className={pathName === "/addCalendar" ? "active" : null}>
              {" "}
              <FaCalendarAlt />
              <p>التقويم</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={pathName === "/mediator" ? "active" : ""}
              to="/client"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => setShowDrobdown(!showDropdown)}
            >
              {" "}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <FaUsers />
                <p>العملاء</p>{" "}
              </div>
              <div>{showDropdown ? <FaChevronDown /> : <FaAngleLeft />}</div>
            </NavLink>
            <div className={showDropdown ? "show-dropdown" : "drobdown-menu"}>
              <NavLink to="/client" className={pathName === "/addClient" ? "active" : null}>
                {" "}
                <p>- عميل</p>{" "}
              </NavLink>
              <NavLink to="/mediator">
                {" "}
                <p>- وسيط</p>{" "}
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/employees"
              className={pathName === "/addemployees" ? "active" : null}
            >
              {" "}
              <HiUsers />
              <p>الموظفين</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/administration">
              {" "}
              <IoMdSettings />
              <p>الادارة</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/powers" className={pathName === "/addPower" ? "active" : null}>
              {" "}
              <MdLibraryAddCheck />
              <p>الصلاحيات</p>{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses">
              {" "}
              <FaMoneyCheckDollar />
              <p>المصروفات</p>{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
