export type DatePickerCalenderProps = {
  date: Date;
  onMonthDecrease: () => void;
  onMonthIncrease: () => void;
  onDateSelect: (date: Date) => void;
  selection: Array<Date>;
};
