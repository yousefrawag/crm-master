import React, { useState } from "react";
import {SingleBraedcrumb } from "../../../components";
import { FaSearch } from "react-icons/fa";
import { MdLibraryAddCheck } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import employeesImage from "../../../assets/images/employees-user.png";
import { NavLink } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PowersTabel from "./PowersTabel";
import "./Powers.scss";
const Powers = () => {
  const columns = [
    {
      name: "الصلاحية",
      selector: (row) => row.validity,
/*       cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={row.name.image}
            alt={row.name.text}
            style={{ width: "auto", height: "auto", marginRight: "10px" }}
          />
          <span>{row.name.text}</span>
        </div>
      ), */
    },
    {
      name: "عدد الأشخاص",
      selector: (row) => row.persons,
            cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
          <img
            src={row.persons.image}
            alt={row.persons.number}
            style={{ width: "auto", height: "auto", marginRight: "0", transform: "translateX(-5px)" }}
          />
          <span style={{backgroundColor: "#181C32", color: "white", width: "25px", height: "25px", display:"flex", fontSize: "10px", alignItems: "center", justifyContent: "center", borderRadius: "50%"}}>{row.persons.number}</span>
        </div>
      ),
    },
    {
      name: "المهام",
      selector: (row) => row.mission,
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.date,
    },
    {
      name: "اجراء",
      selector: (row) => row.procedure,
    },
  ];
  const data = [
    {
      id: 1,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 2,
      validity: "مشرف",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 3,
      validity: "مسؤول اداري",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 4,
      validity: "مشرف",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 5,
      validity: "مشرف",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 6,
      validity: "مشرف",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 7,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 8,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 9,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 10,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 11,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 12,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 13,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 14,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    },
    {
      id: 15,
      validity: "مسؤل مالي",
      persons: {
        number: "+20",
        image: employeesImage
      },
      mission: "اسم الصلاحية",
      date: "2024-05-28",
      procedure: <HiOutlineDotsHorizontal />,
    }
  ];
  const [records, setRecords] = useState(data);
  const [selectedDate, setSelectedDate] = useState("");
  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.name.text
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };
  const handleDate = (event) => {
    const selectedDate = event.target.value;
    const newData = data.filter((row) => {
      return row.date === selectedDate;
    });
    setRecords(newData);
    setSelectedDate(selectedDate);
  };
  return (
    <>
      <section className="main_powers_wrapper">
        <div className="container">
          <div className="powers_top">
            <div className="m-b-c">
              <SingleBraedcrumb
                icon={<MdLibraryAddCheck />}
                title="الصلاحيات"
              />
            </div>
            <div className="add-new">
              <NavLink to="/addPower">
                <FiPlus />
                اضافة جديد
              </NavLink>
            </div>
          </div>

          {/* powers table */}

          <div className="powers_box">
            <div className="box-top">
              <div className="title">
                {" "}
                <p>
                  {" "}
                  الصلاحيات <span>({data.length})</span>
                </p>{" "}
              </div>
              <div className="search-date">
                <div className="search">
                  <input
                    type="text"
                    placeholder="البحث..."
                    onChange={handleFilter}
                  ></input>
                  <FaSearch />
                </div>
                <div className="date">
                  <form>
                    <input
                      type="date"
                      name="date"
                      onChange={handleDate}
                      value={selectedDate}
                      locale="ar"
                    />
                  </form>
                </div>
              </div>
            </div>

            {/* powers table*/}
            <PowersTabel columns={columns} data={records} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Powers;
