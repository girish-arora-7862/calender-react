export type DatePickerProps = {
  onChange: (value: DateRangeInfo) => void;
  showPerDefinedRange: boolean;
};

export type DateRangeInfo = {
  range: DateRangeString;
  weekends: Array<string>;
};

export type DateRangeString = [string, string];
export type DateRange = [Date, Date];
