export const handleDateFormat = (date) => {
  const currentDatetime = new Date(date);
  const formattedDate = `${currentDatetime.getDate()}-${currentDatetime.getMonth()
    + 1}-${currentDatetime.getFullYear()}`;
  return formattedDate;
};
