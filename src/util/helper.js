// Function to format date to 'YYYY-MM-DD'
export const formatDateToYYYYMMDD = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    // Handle invalid date case
    return "";
  }
  return date.toISOString().split("T")[0];
};
