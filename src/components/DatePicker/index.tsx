import React, { useState } from "react";
import "./index.css";
import { DatePickerProps, DateRange } from "../../@types/DatePicker";
import DatePickerInput from "../DatePickerInput";
import DatePickerPopUp from "../DatePickerPopUp";
import { getFormattedDate, getFormattedWeekend } from "../../utils/utils";

const DatePicker = ({ onChange, showPerDefinedRange }: DatePickerProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >();

  const handleSelect = (dateRange: DateRange) => {
    setShowPopUp(false);
    setSelectedDateRange(dateRange);
    onChange({
      range: [getFormattedDate(dateRange[0]), getFormattedDate(dateRange[1])],
      weekends: getFormattedWeekend(dateRange),
    });
  };

  return (
    <div className="DatePickerWrapper">
      <DatePickerInput
        setShowPopUp={setShowPopUp}
        selectedDateRange={selectedDateRange}
      />
      {showPopUp && (
        <DatePickerPopUp
          onSelect={handleSelect}
          selectedDateRange={selectedDateRange}
          showPerDefinedRange={showPerDefinedRange}
        />
      )}
    </div>
  );
};

export default DatePicker;
