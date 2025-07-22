// To create current moment's date
export const getCurrentDate = () => new Date().toISOString();

// To remove time zone string from date
export const removeTimeZone = (iso?: string) => {
  return iso ? iso.split("T")[0] : new Date().toISOString().split("T")[0];
};

export const formatCedula = (rawText: string) => {
  // To delete every non digit
  const digits = rawText.replace(/\D/g, '').slice(0, 11);
  // 2) Insert - when reaching 10 digits
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 10) {
    return digits.slice(0, 3) + '-' + digits.slice(3);
  } else {
    return (
      digits.slice(0, 3) +
      '-' +
      digits.slice(3, 10) +
      '-' +
      digits.slice(10)
    );
  }
}