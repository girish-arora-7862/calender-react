import { DateRange } from "../@types/DatePicker";

export const getFormattedWeekend = (dateRange: DateRange) => {
  const res = [];
  let currentDate = dateRange[0];
  while (currentDate.toString() !== dateRange[1].toString()) {
    if (isWeekend(currentDate)) {
      res.push(getFormattedDate(currentDate));
    }
    currentDate = getNextDay(currentDate);
  }
  return res;
};

export const getFirstDateOfCalender = (date: Date) => {
  let newDate = new Date(date);
  date.setDate(1);
  while (newDate.getDay() !== 0) {
    newDate.setDate(newDate.getDate() - 1);
  }
  return newDate;
};

export const getNextDate = (date: Date) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
};

export const getDatesOfCalender = (date: Date) => {
  const res = [];
  let currentDate = getFirstDateOfCalender(date);
  res.push(currentDate);
  for (let i = 1; i < 6 * 7; i++) {
    currentDate = getNextDate(currentDate);
    res.push(currentDate);
  }
  return res;
};

export const isWeekend = (date: Date) => {
  return date.getDay() === 0 || date.getDay() === 6;
};

export const getMonthAndYearString = (date: Date) => {
  return date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
};

export const getCurrentMonth = (date: Date) => {
  let newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const getNextMonth = (date: Date) => {
  let newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0, 0, 0, 0);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

export const getPrevMonth = (date: Date) => {
  let newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0, 0, 0, 0);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
};

export const getPrevDay = (date: Date) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 1);
  return newDate;
};

export const getNextDay = (date: Date) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  return newDate;
};

export const getFormattedDate = (date: Date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let monthString = month < 10 ? `0${month}` : `${month}`;
  let dayString = day < 10 ? `0${day}` : `${day}`;

  return year + "-" + monthString + "-" + dayString;
};
