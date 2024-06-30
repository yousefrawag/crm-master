import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import "./BreadCrumb.scss";

const BreadCrumb = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const titles = {
    "/": "",
    "/projects": "المشاريع",
    "/administration": "الادارة",
    "/calendar": "التقويم",
    "/employees": "الموظفين",
    "/addemployees": "الموظفين   ",
    "/invoices": "الفواتير",
    "/reports": "التقارير",
    "/mission": "المهام",
    "/powers": "الصلاحيات",
    "/expenses": "المصروفات",
    "/mediator": "العملاء",
    "/client": "العملاء"
  };

  return (
    <div className='breadcrumb-single'>
      <p>الراية</p>
      {pathName === "/" ? null : <FaAngleLeft />}
      <p className='active'>{titles[pathName]}</p>
    </div>
  );
};

export default BreadCrumb;