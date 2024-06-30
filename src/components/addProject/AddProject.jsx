import { PiBuildingsFill } from "react-icons/pi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import DetailsBox from "./DetailsBox";
import "./AddProject.scss";
import { NavLink, useNavigate } from "react-router-dom";

const AddProject = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
/*         const fromDatat = new FormData(e.currentTarget)
        const data = Object.fromEntries(fromDatat)
        console.log(data) */
        navigate ("/projects", {replace: true})
      }
  return (
    <section className='add_project_section'>
        <div className="title_top">
            <p>ادخل بيانات العقار</p>
        </div>
        <div className="main_project_content">
            <div className="right_box">
                <div className="Project_completion_stage">
                    <div className="icon">
                    <PiBuildingsFill />
                    </div>
                    <div className="text">
                        <p>بيانات العقار</p>
                        <p>ادخل تفاصيل العقار</p>
                    </div>
                </div>
                <div className="Project_completion_stage">
                    <div className="icon">
                    <FaUsers />
                    </div>
                    <div className="text">
                        <p>العملاء</p>
                        <p>اخيار العميل</p>
                    </div>
                </div>
                <div className="Project_completion_stage">
                    <div className="icon">
                    <IoMdLink />
                    </div>
                    <div className="text">
                        <p>مرفقات</p>
                        <p>ادخال مرفقات العقار</p>
                    </div>
                </div>
            </div>
            <div className="left_details_box">
                <form action="" onSubmit={onSubmit}>
                <div className="l_d_b_t">
                    <div className="icon">
                    <FaRegPenToSquare />
                    </div>                    
                    <p>ادخل بيانات العقار</p>
                </div>

                {/* here is Project Box */}

                <DetailsBox/>



                <div className="add_return">
                    <div className="return_btn">
                    <NavLink to="/projects">
                عودة 
              </NavLink>
                    </div>
                    <div className="add_btn">
              <button className="btn_submit" type="submit">
                اضافة 
              </button>
                    </div>
                </div>
                </form>
            </div>
        </div>

    </section>
  )
}

export default AddProject