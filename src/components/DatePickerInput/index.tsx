import React from "react";
import "./index.css";
import { ReactComponent as CalenderIcon } from "../../assets/calender.svg";
import { DatePickerInputProps } from "../../@types/DatePickerInput";
import { getFormattedDate } from "../../utils/utils";

const DatePickerInput = ({
  setShowPopUp,
  selectedDateRange,
}: DatePickerInputProps) => {
  return (
    <div
      className="DatePickerInput_wrapper"
      onClick={() => setShowPopUp((value) => !value)}
    >
      <div className="DatePickerInput_value">
        {selectedDateRange
          ? `${getFormattedDate(selectedDateRange[0])} ~ ${getFormattedDate(
              selectedDateRange[1]
            )} `
          : "yyyy-MM-dd ~ yyyy-MM-dd"}
      </div>
      <div className="DatePickerInput_icon">
        <CalenderIcon />
      </div>
    </div>
  );
};

export default DatePickerInput;
