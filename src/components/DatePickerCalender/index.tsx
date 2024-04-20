import React from "react";
import "./index.css";
import { DatePickerCalenderProps } from "../../@types/DatePickerCalender";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import {
  getDatesOfCalender,
  getMonthAndYearString,
  isWeekend,
} from "../../utils/utils";

const DatePickerCalender = ({
  date,
  onMonthDecrease,
  onMonthIncrease,
  onDateSelect,
  selection,
}: DatePickerCalenderProps) => {
  const calenderDayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dates: Array<Date> = getDatesOfCalender(date);

  return (
    <div className="DatePickerCalender">
      <div className="DatePickerCalender_header">
        <LeftArrow onClick={onMonthDecrease} />
        <div className="DatePickerCalender_title">
          {getMonthAndYearString(date)}
        </div>
        <RightArrow onClick={onMonthIncrease} />
      </div>
      <div className="DatePickerCalender_days">
        {calenderDayNames.map((dayName, idx) => (
          <div key={idx} className="DatePickerCalender_day_name">
            {dayName}
          </div>
        ))}
        {dates.map((currentDate, idx) => {
          const isDisabled =
            currentDate.getMonth() !== date.getMonth() ||
            isWeekend(currentDate);
          const isMiddle =
            currentDate > selection[0] &&
            currentDate < selection[1] &&
            !isDisabled;
          const isSelected =
            (currentDate.toString() === selection[0]?.toString() ||
              currentDate.toString() === selection[1]?.toString()) &&
            !isDisabled;
          return (
            <div
              key={idx}
              className={`DatePickerCalender_date ${isMiddle && "middle"} ${
                isSelected && "selected"
              } ${isDisabled && "disabled"}`}
              onClick={() => {
                if (!isDisabled) {
                  onDateSelect(currentDate);
                }
              }}
            >
              {currentDate.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatePickerCalender;
