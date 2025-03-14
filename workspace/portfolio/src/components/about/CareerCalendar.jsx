import React from 'react';
import './CareerCalendar.scss';

const CareerCalendar = ({ events }) => {
  return (
    <div className="career-calendar">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="date-columns">
            <div className="year-col">
              {event.isStart ? (
                <span className="year always-show">{event.year}</span>
              ) : (
                <span className="year hidden-year">{event.year}</span>
              )}
            </div>
            <div className="period-col">
              <span className="period">{event.period}</span>
            </div>
          </div>
          <div className="content-col">
            <h3 className="title">{event.title}</h3>
            <p className="description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerCalendar;
