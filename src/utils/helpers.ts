// To create current moment's date
export const getCurrentDate = () => new Date().toISOString();

// To remove time zone string from date
export const removeTimeZone = (iso?: string) => {
  return iso ? iso.split("T")[0] : new Date().toISOString().split("T")[0];
};
