import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderPage.css';
 // Import default styling

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="calendar-container">
            <h1>Calendar</h1>
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
            <div className="selected-date">
                <h2>Selected Date:</h2>
                <p>{date.toDateString()}</p>
            </div>
        </div>
    );
};

export default CalendarPage;

