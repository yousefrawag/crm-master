import React, { useState } from "react";
import {SingleBraedcrumb} from "../../../components";
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import employeesImage from "../../../assets/images/employees-user.png";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CalendarTaple from "./CalendarTaple";
import "./Calendar.scss";

const Calendar = () => {

  const columns = [
    {
      name: "اسم العميل",
      selector: (row) => row.name,
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={row.name.image}
            alt={row.name.text}
            style={{ width: "auto", height: "auto", marginRight: "10px" }}
          />
          <span>{row.name.text}</span>
        </div>
      ),
    },
    {
      name: "تاريخ الانشاء",
      selector: (row) => row.date,
    },
    {
      name: "نوع العقار",
      selector: (row) => row.realName,
    },
    {
      name: "تاريخ الاستحقاق",
      selector: (row) => row.dueName,
    },
    {
      name: "اجراء",
      selector: (row) => row.procedure,
    },
  ];
  const data = [
    {
      id: 1,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 2,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 3,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 4,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 5,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 6,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 7,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 8,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 9,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 10,
      name: {
        text: "محمد كمال",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 11,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 12,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 13,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
    },
    {
      id: 14,
      name: {
        text: "اسم العميل",
        image: employeesImage,
      },
      realName: "فيلا",
      dueName: "15 اغسطس, 2024",
      procedure: <HiOutlineDotsHorizontal />,
      date: "15 اغسطس, 2024",
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
    <section className="main_calendar_wrapper">
   
      <div className="container">
      <div className="calendar_top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaCalendarAlt />} title="التقويم" />
            </div>
            <div className="add-new">
              <NavLink to="/addCalendar">
                <FiPlus />
                اضافة جديد
              </NavLink>
            </div>
          </div>
                  {/* calendar table */}

        <div className="calendar_box">
          <div className="box-top">
            <div className="title">
              {" "}
              <p>
                {" "}
                التقويم <span>({data.length})</span>
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

          {/* about  calendar table*/}
          <CalendarTaple columns={columns} data={records} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Calendar