import React, { useState } from "react";
import "./index.css";
import { DatePickerPopUpProps } from "../../@types/DatePickerPopUp";
import DatePickerCalender from "../DatePickerCalender";
import Button from "../Button";
import {
  getCurrentMonth,
  getFormattedDate,
  getNextMonth,
  getPrevDay,
  getPrevMonth,
  isWeekend,
} from "../../utils/utils";

const DatePickerPopUp = ({
  onSelect,
  selectedDateRange,
  showPerDefinedRange,
}: DatePickerPopUpProps) => {
  const [startMonth, setStartMonth] = useState<Date>(
    selectedDateRange
      ? getCurrentMonth(selectedDateRange[0])
      : getCurrentMonth(new Date())
  );
  const [endMonth, setEndMonth] = useState<Date>(
    selectedDateRange &&
      selectedDateRange[0].getMonth() !== selectedDateRange[1].getMonth()
      ? getCurrentMonth(selectedDateRange[1])
      : getNextMonth(startMonth)
  );
  const [selection, setSelection] = useState<Array<Date>>(
    selectedDateRange ?? []
  );

  const handleDateSelection = (date: Date) => {
    switch (selection.length) {
      case 0:
      case 2: {
        setSelection([date]);
        break;
      }
      case 1: {
        if (date < selection[0]) {
          setSelection([date, selection[0]]);
        } else {
          setSelection([selection[0], date]);
        }
        break;
      }
    }
  };

  const handleLastNDays = (n: number) => {
    let currentDate = new Date();
    let count = 0;
    let endDate = new Date();
    let startDate = new Date();
    while (count !== n + 1) {
      if (!isWeekend(currentDate)) {
        count++;
      }
      if (count === 1) {
        endDate = new Date(currentDate);
      }
      if (count === n + 1) {
        startDate = new Date(currentDate);
      }
      currentDate = getPrevDay(currentDate);
    }
    setSelection([startDate, endDate]);
    onSelect([startDate, endDate]);
  };

  return (
    <div className="DatePickerPopUp">
      <div className="DatePickerPopUp_title">
        {`${selection[0] ? getFormattedDate(selection[0]) : "yyyy-MM-dd"} ~ ${
          selection[1] ? getFormattedDate(selection[1]) : "yyyy-MM-dd"
        }`}
      </div>
      <div className="DatePickerPopUp_content">
        <div className="DatePickerPopUp_start_calender">
          <DatePickerCalender
            date={startMonth}
            onMonthDecrease={() => {
              setStartMonth(getPrevMonth(startMonth));
            }}
            onMonthIncrease={() => {
              const newStartMonth = getNextMonth(startMonth);
              setStartMonth(newStartMonth);
              if (newStartMonth.getMonth() === endMonth.getMonth()) {
                setEndMonth(getNextMonth(endMonth));
              }
            }}
            onDateSelect={handleDateSelection}
            selection={selection}
          />
        </div>
        <div className="DatePickerPopUp_end_calender">
          <DatePickerCalender
            date={endMonth}
            onMonthIncrease={() => {
              setEndMonth(getNextMonth(endMonth));
            }}
            onMonthDecrease={() => {
              const newEndMonth = getPrevMonth(endMonth);
              setEndMonth(newEndMonth);
              if (newEndMonth.getMonth() === startMonth.getMonth()) {
                setStartMonth(getPrevMonth(startMonth));
              }
            }}
            onDateSelect={handleDateSelection}
            selection={selection}
          />
        </div>
      </div>
      <div className="DatePickerPopUp_footer">
        <div className="DatePickerPopUp_options">
          {showPerDefinedRange && (
            <>
              <Button
                text="Last 7 Days"
                type="text"
                onClick={() => handleLastNDays(7)}
              />
              <Button
                text="Last 30 Days"
                type="text"
                onClick={() => handleLastNDays(30)}
              />
            </>
          )}
        </div>
        <div className="DatePickerPopUp_wrapper">
          <Button
            isDisabled={selection.length !== 2}
            text="OK"
            onClick={() => {
              onSelect([selection[0], selection[1]]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerPopUp;
