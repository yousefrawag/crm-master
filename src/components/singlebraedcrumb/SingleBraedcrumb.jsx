import React from 'react';
import "./SingleBraedcrumb.scss";

const SingleBraedcrumb = (props) => {
  const {title, icon} = props
  return (
    <div className='breadcrumb-pages'>
        <div className='icon'>{icon}</div>
        <div className='title'>{title}</div>
    </div>
  );
};

export default SingleBraedcrumb;