import React, { useState } from "react";
import { SingleBraedcrumb } from "../../../components";
import { PiBuildingsFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { projectsPro } from "../../../assets/Data/Data";
import "./Projects.scss";
const projects = () => {
  /* 
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
  }; */
  return (
    <section className="main_project_wrapper">
      <div className="container">
        <div className="project_top">
          <div className="m-b-c">
            <SingleBraedcrumb icon={<PiBuildingsFill />} title="المشاريع" />
          </div>
          <div className="add-new">
            <NavLink to="/AddProject">
              <FiPlus />
              اضافة مشروع
            </NavLink>
            <input type="date" name="date" lang="ar" />
          </div>
        </div>
        <div className="all_projects_num">
          <div>
            <div className="icon_pro" style={{ backgroundColor: "#218bc7" }}>
              <PiBuildingsFill />
            </div>
            <div className="pro_num_txt">
              <h5>{projectsPro.length}</h5>
              <p>مشروع جديد</p>
            </div>
          </div>
          <div>
            <div className="icon_pro">
              <PiBuildingsFill />
            </div>
            <div className="pro_num_txt">
              <h5>50.000.00</h5>
              <p>كل المشاريع</p>
            </div>
          </div>
        </div>
        {/* project table */}
        <div className="project_box">
          {projectsPro.map((data) => {
            const {
              id,
              img,
              realPlace,
              realSpace,
              installmentsNum,
              propertyAmount,
            } = data;
            return (
              <div className="project_detials_box" key={id}>
                <div className="project_img">
                  <img src={img} alt="project image" />
                </div>
                <div className="project_content">
                  <div>
                    <p>عقار فيلا</p> <span>{realPlace}</span>
                  </div>
                  <div>
                    <p>المساحة / متر*</p> <span>{realSpace}</span>
                  </div>
                  <div>
                    <p> عدد الاقساط / سنة</p> <span>{installmentsNum}</span>
                  </div>
                  <div>
                    <p>مبلغ العقار</p>{" "}
                    <span style={{ color: "#218bc7", fontWeight: "700" }}>
                      {propertyAmount}
                    </span>
                  </div>
                </div>
                <div className="btn_project_det">
                  <Link className="btn_deta" to={`/SingleProject/${id}`}>
                    تفاصيل
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default projects;
