import { GiStabbedNote } from "react-icons/gi";
import { SingleBraedcrumb } from "../../../components";
import { FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { all_tasks } from "../../../assets/Data/Data";
import "./Mission.scss";
const Mission = () => {
  return (
    <section className="mission_section_wrapper">
      <div className="container">
        <div className="mission_top">
          <div className="m-b-c">
            <SingleBraedcrumb icon={<GiStabbedNote />} title="المهام" />
          </div>
          <div className="add-new">
            <button data-toggle="modal" data-target="#staticBackdrop">
              <FiPlus />
              اضافة مهمه
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
                      <h5 className="modal-title" id="staticBackdropLabel">
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
                        مرحباً هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                        المساحة، لقد تم توليد هذا النص من مولد النص العربى،
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
                          <label htmlFor="vehicle1">عرض بيانات المشروع</label>
                        </div>
                        <div>
                          {" "}
                          <input
                            type="checkbox"
                            name="vehicle2"
                            value="تعديل بيانات المشروع"
                          />
                          <label htmlFor="vehicle2">تعديل بيانات المشروع</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="vehicle3"
                            value="تعديل تصميم المشروع"
                          />
                          <label htmlFor="vehicle3">تعديل تصميم المشروع</label>
                        </div>
                        <div>
                          {" "}
                          <input
                            type="checkbox"
                            name="vehicle4"
                            value="تعديل مرفقات المشروع"
                          />
                          <label htmlFor="vehicle4">تعديل مرفقات المشروع</label>
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
            <input type="date" name="date" lang="ar" />
          </div>
        </div>
        <div className="mission_box">
          {all_tasks.map((item) => {
            const { id, validity, img, name, phone, date, projectMan } = item;
            return (
              <div className="box_content" key={id}>
                <div className="top_mang">
                  <p>{validity}</p>
                  <HiOutlineDotsHorizontal />
                </div>
                <div className="client_content">
                  <div className="img_name">
                    <div>
                      <img src={img} alt="user img" />
                    </div>
                    <div>
                      <p>{name}</p>
                      <span>{date}</span>
                    </div>
                  </div>
                  <div className="phone">
                    <p>{phone}</p>
                  </div>
                </div>
                <div className="end_pro">
                  <p>{projectMan}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
