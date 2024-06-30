import { HiUsers } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import employeesPerson from "../../assets/images/employees_person.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { SingleBraedcrumb } from "../../components";
import "./AddEmployees.scss";
const AddEmployees = () => {
    const [imageFile, setImageFile] = useState(employeesPerson);
    const navigate = useNavigate();
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImageFile(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

      const onSubmit = (e) => {
        e.preventDefault();
        navigate ("/employees", {replace: true})
      }

  return (
    <section className="add-employees">
      <div className="contaienr">
        <div className="add-employees-top">
          <div className="m-b-c">
            <SingleBraedcrumb icon={<HiUsers />} title="الموظفين" />
          </div>
          <div className="add-new">
            {" "}
            <NavLink to="/employees">
              <HiArrowLongRight />
              عودة
            </NavLink>{" "}
          </div>
        </div>

        <div className="add-employees-data">
          <div className="add-text">
            <p>ادخل بيانات الموظف</p>
          </div>
          <form action="" onSubmit={onSubmit}>
          <div className="add-employees-image">
          {imageFile === employeesPerson ? <img className="image-person" src={imageFile} alt="person"  /> : <div className="newPic"><img className="image-person" src={imageFile} alt="person"  /></div>}
          <div className="add-svg">
            <FiPlus />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
      </div>
            <div className="main-inputs">
              <div className="chi-in">
                <div>
                  <label>اسم الموظف*</label>
                  <input type="text" name="text" required />
                </div>
                <div>
                  <label>الايميل*</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="chi-in">
                <div>
                  <label>رقم الهاتف*</label>
                  <input type="phone" name="phone" required />
                </div>
                <div>
                  <label>الصلاحية*</label>
                  <select required>
                    <option value="" disabled selected hidden>
                      اختر الصلاحية
                    </option>
                    <option value="">مشرف</option>
                    <option value="">مسؤل مالي</option>
                    <option value="">موظف</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="btn-down">
            <NavLink className="cancel" to="/employees">الغاء</NavLink>
            <button className="save" type="submit">حفظ</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEmployees;
