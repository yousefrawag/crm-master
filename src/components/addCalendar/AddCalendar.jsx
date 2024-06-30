import { FaCalendarAlt } from "react-icons/fa";
import SingleBraedcrumb from "../singlebraedcrumb/singlebraedcrumb";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from '@fullcalendar/core/locales-all'

import "./AddCalendar.scss";
const AddCalendar = () => {
  return (
    <>
    <div className="calendar_section_details">
        <div className="container">
        <div className="calendar_top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaCalendarAlt />} title="التقويم" />
            </div>
          </div>
          <div className="calendar_box">
                  <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={[
            { title: 'مشروع رقم 1', date: '2024-06-11' },
            { title: 'مشروع رقم 2', date: '2024-06-04' },
            { title: 'مشروع رقم 3', date: '2024-06-02' }
          ]}
          locales={allLocales}
           locale={'ar'}
        
      />
          </div>
        </div>
    </div>
    </>
  )
}

export default AddCalendar