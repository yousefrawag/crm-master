/* eslint-disable no-unused-vars */
import { FaChevronDown } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
import Uploadeproject from './../addprojectImagesuploade/Uploadeproject';

const DetailsBox = () => {
  const finishing_c = ["صيانة", "بيع", "تاجير"];
  const finishing_f = ["متاح للتقسيط", "غير متاح التقسيط"];
  const finishing_d = ["عالي الجودة", "متوسط الجودة", "عادي"];
  const [show_a, setShowA] = useState();
  const handleButtonClickA = (buttonId) => {
    setShowA(buttonId);
  };
  const [show_b, setShowB] = useState();
  const handleButtonClickB = (buttonId) => {
    setShowB(buttonId);
  };
  const [show_c, setShowC] = useState();
  const handleButtonClickC = (buttonId) => {
    setShowC(buttonId);
  };
  const [images_video , setimages_video] = useState([])
 const [images_error , setimage_error] = useState(false)
 const allowedExtensions = ["jpg", "jpeg", "png", "mp4", "mpeg"]
//  const handeluploads = (files) => {
//   setimages_video(files)
//   for (let i = 0 ; i < images_video.length ; i++) {
//     const filename = images_video[i].name
//     const fileExtions = filename.split(".").pop().toLowerCase()
//     if(!allowedExtensions.includes(fileExtions)) {
//      return setimage_error(true)
//     } else {
//       return setimage_error(false)
//     }
//   }
//  }
console.log(images_video);
  return (
    <>
      <div className="project_box">
          <div className="property_type">
          <div className="main_group">
              <label htmlFor="exampleFormControlSelect1">اختر نوع العقار</label>
              <select className="form_control" id="exampleFormControlSelect1">
                <option value="#">فيلا</option>
                <option value="#">شقة</option>
                <option value="#">مخزن</option>
              </select>
            </div>
          </div>
          <div className="property_location">
            <p>تفاصيل مكان العقار</p>
            <div className="real_inputs">
            <div className="main_group">
              <label htmlFor="exampleFormControlSelect2">المحافظة*</label>
              <select className="form_control" id="exampleFormControlSelect2">
                <option value="#">الجيزه</option>
                <option value="#">القاهره</option>
                <option value="#">المنصوره</option>
              </select>
            </div>
            <div className="main_group">
              <label htmlFor="exampleFormControlSelect3">المدينة*</label>
              <select className="form_control" id="exampleFormControlSelect3">
                <option value="#">الجيزه</option>
                <option value="#">القاهره</option>
                <option value="#">المنصوره</option>
              </select>
            </div>
            <div className="main_group">
              <label htmlFor="exampleFormControlSelect4">رقم العقار*</label>
              <select className="form_control" id="exampleFormControlSelect4">
                <option value="#">الجيزه</option>
                <option value="#">القاهره</option>
                <option value="#">المنصوره</option>
              </select>
            </div>
            <div className="main_group">
              <label htmlFor="exampleFormControlSelect5">الدور الخاص بالعقار*</label>
              <select className="form_control" id="exampleFormControlSelect5">
                <option value="#">الجيزه</option>
                <option value="#">القاهره</option>
                <option value="#">المنصوره</option>
              </select>
            </div>
            </div>
          </div>
          <div className="project_address">
            <label htmlFor="exampleFormControlSelect6">العنوان بالتفصيل*</label>
            <input type="text" name="text" id="exampleFormControlSelect6" />
          </div>
          <div className="client_dir">
          <div className="main_group">
              <label htmlFor="exampleFormControlSelect7">الجهة التابعة للعقار</label>
              <select className="form_control" id="exampleFormControlSelect7">
                <option value="#">عميل</option>
                <option value="#">عميل</option>
                <option value="#">عميل</option>
              </select>
            </div>
          </div>
          <div className="finishing_c">
            <p className="pt-3">نوع العملية</p>
            <div className="display-flex py-3">

              {finishing_c.map((item, index) => {
                return (
                  <button onClick={() => handleButtonClickA(item)} className={show_a === item ? "active" : null} type="button" key={index}>{item}</button>
                )
              }) }
            </div>
          </div>
          <div className="project_price">
            <label htmlFor="exampleFormControlSelect8">اضف مبلغ العقار</label>
            <input type="text" name="text" id="exampleFormControlSelect8" />
          </div>
          <div className="finishing_c">
            <p className="pt-3">امكانية التقسيط</p>
            <div className="display-flex py-3">
            {finishing_f.map((item, index) => {
                return (
                  <button onClick={() => handleButtonClickB(item)} className={show_b === item ? "active" : null} type="button" key={index}>{item}</button>
                )
              }) }
            </div>
          </div>
          <div className="project_price">
            <label htmlFor="exampleFormControlSelect9">عدد الاقساط  / سنة</label>
            <input type="text" name="text" id="exampleFormControlSelect9" />
          </div>
          <div className="project_price">
            <label htmlFor="exampleFormControlSelect10">المساحة / متر*</label>
            <input type="text" name="text" id="exampleFormControlSelect10" />
          </div>
          <div className="finishing_c">
            <p className="pt-3">جودة التشطيب</p>
            <div className="display-flex py-3">
            {finishing_d.map((item, index) => {
                return (
                  <button onClick={() => handleButtonClickC(item)} className={show_c === item ? "active" : null} type="button" key={index}>{item}</button>
                )
              }) }
            </div>
          </div>
          <div className="add_files">
            jhj
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  <FiPlus /> إضافة مرفقات
                </div>
              </button>
              <div className="dropdown-menu" >
               <label htmlFor="files" className="dropdown-item">
                  {" "}
                  <img src="/images/Vector.svg" alt="Vector" /> اختر من الملفات
                  </label>
                  <input type="file" multiple className="input-file" id="files" />
                <label htmlFor="image-video" className="dropdown-item">
                  <img src="/images/Group.svg" alt="Group" /> اختر صورة او فيديو{" "}
                  </label>
                  <input onChange={(e) =>setimages_video([...e.target.files , ...images_video])} type="file"   accept="video/*,image/*" multiple className="input-file" id="image-video" />
              </div>
             
            </div>
            {
              images_video.length ?  <Uploadeproject images ={images_video} setimages ={setimages_video} /> :null
            }
           
          </div>
      </div>
    </>
  );
};

export default DetailsBox;
