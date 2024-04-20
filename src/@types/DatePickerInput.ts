import { DateRange } from "./DatePicker";

export type DatePickerInputProps = {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDateRange: DateRange | undefined;
};
