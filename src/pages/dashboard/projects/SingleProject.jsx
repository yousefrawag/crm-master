import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { SingleBraedcrumb } from "../../../components";
import { PiBuildingsFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { projectsPro } from "../../../assets/Data/Data";
import { useParams } from "react-router-dom";
import "./Projects.scss";
import "./AsNavFor.scss";
const SingleProject = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const finishing_c = ["بيانات المشروع", "كل المهام"];
  const [show_a, setShowA] = useState("بيانات المشروع");
  const handleButtonClickA = (buttonId) => {
    setShowA(buttonId);
  };
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const { id } = useParams();

  const project = projectsPro.find((item) => item.id === parseInt(id));
  const {
    subImages,
    img,
    realPlace,
    realSpace,
    installmentsNum,
    propertyAmount,
  } = project;
  return (
    <section className="single_project_wrapper">
      <div className="container">
        <div className="project_top">
          <div className="m-b-c">
            <SingleBraedcrumb
              icon={<PiBuildingsFill />}
              title="المشاريع / عرض المشروع"
            />
          </div>
          <div className="add-new">
            <NavLink to="/AddProject">
              <FiPlus />
              اضافة مشروع
            </NavLink>
            <input type="date" name="date" lang="ar" />
          </div>
        </div>
        <div className="single_project_box">
          <div className="project_slider_img">
            <div className="slider-container">
              <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                rtl={true}
              >
                {subImages?.length > 1 &&
                  subImages.map((img, index) => (
                    <img src={img} key={`item-#${index}`} />
                  ))}
              </Slider>
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                rtl={true}
              >
                {subImages?.length > 1 &&
                  subImages.map((img, index) => (
                    <img src={img} key={`item-#${index}`} />
                  ))}
              </Slider>
            </div>
          </div>
          {/* single project content */}
          <div className="single_project_content">
            <div className="catug_btn">
              {finishing_c.map((item, index) => {
                return (
                  <button
                    onClick={() => handleButtonClickA(item)}
                    className={show_a === item ? "active" : null}
                    type="button"
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div
              style={
                show_a === "كل المهام"
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="all_tasks"
            >
              all tasks
            </div>
            <div
              className="project_details_sin"
              style={
                show_a === "بيانات المشروع"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <h4>بيانات المشروع</h4>
              <div className="main_content">
                <div className="details">
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
                <div className="attachments">
                  <p>المرفقات</p>
                  <div className="files">file</div>
                  <div className="add_task">
                    <button
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#staticBackdrop"
                    >
                      اضافه مهمه
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <form action="">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                              >
                                اضافه مهمه
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="demo_txt">
                              <p>
                                {" "}
                                مرحباً هذا النص هو مثال لنص يمكن أن يستبدل في
                                نفس المساحة، لقد تم توليد هذا النص من مولد النص
                                العربى،
                              </p>
                            </div>
                            <div className="modal-dialog modal-dialog-scrollable">
                              <label htmlFor="exampleFormControlSelect1">
                                اختر الموظف
                              </label>
                              <select
                                className="form_control"
                                id="exampleFormControlSelect1"
                              >
                                <option value="#">محمد علي</option>
                                <option value="#">محمد علي</option>
                                <option value="#">محمد علي</option>
                              </select>
                              <label htmlFor="exampleFormControlSelect2">
                                نوع المهمه
                              </label>
                              <select
                                className="form_control"
                                id="exampleFormControlSelect2"
                              >
                                <option value="#">اشراف علي المشروع</option>
                                <option value="#">اشراف علي المشروع</option>
                                <option value="#">اشراف علي المشروع</option>
                              </select>
                              <label htmlFor="exampleFormControlSelect3">
                                اضافه ملاحظات
                              </label>
                              <textarea
                                name="text"
                                id="exampleFormControlSelect3"
                              ></textarea>
                              <div className="checks_boxs">
                                <div>
                                  {" "}
                                  <input
                                    type="checkbox"
                                    name="vehicle1"
                                    value="عرض بيانات المشروع"
                                  />
                                  <label htmlFor="vehicle1">
                                    عرض بيانات المشروع
                                  </label>
                                </div>
                                <div>
                                  {" "}
                                  <input
                                    type="checkbox"
                                    name="vehicle2"
                                    value="تعديل بيانات المشروع"
                                  />
                                  <label htmlFor="vehicle2">
                                    تعديل بيانات المشروع
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="checkbox"
                                    name="vehicle3"
                                    value="تعديل تصميم المشروع"
                                  />
                                  <label htmlFor="vehicle3">
                                    تعديل تصميم المشروع
                                  </label>
                                </div>
                                <div>
                                  {" "}
                                  <input
                                    type="checkbox"
                                    name="vehicle4"
                                    value="تعديل مرفقات المشروع"
                                  />
                                  <label htmlFor="vehicle4">
                                    تعديل مرفقات المشروع
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                الغاء
                              </button>
                              <button type="button" className="btn btn-primary">
                                حفظ
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
