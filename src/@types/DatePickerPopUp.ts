import { DateRange } from "./DatePicker";

export type DatePickerPopUpProps = {
  onSelect: (dateRamge: DateRange) => void;
  selectedDateRange: DateRange | undefined;
  showPerDefinedRange: boolean;
};
