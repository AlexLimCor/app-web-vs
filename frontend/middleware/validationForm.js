export const validationForm = (data) => {
  for (const [key, value] of Object.entries(data)) {
    let newValue = value.replace(/\s+/g, " ").trim();
    if (newValue.length === 0 || !value) {
      return false;
    }
  }
  return true;
};
