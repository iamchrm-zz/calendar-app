import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/es-messages-calendar";
import { CalendarEvent } from "./CalendarEvent";

moment.locale("es");
const events = [
  {
    title: "Meet",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#fafafa",
    user: {
      _id: "123",
      name: "christian",
    },
  },
];
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView" || "month")
  );
  const onDoubleClick = (e) => {
    console.log(e);
  };
  const onSelectEvent = (e) => {
    console.log(e);
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);

    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return {
      style,
    };
  };
  return (
    <div>
      <Calendar
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        localizer={localizer}
        events={events}
        view={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
      />
    </div>
  );
};
